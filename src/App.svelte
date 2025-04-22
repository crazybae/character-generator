<script>
  import {onMount} from "svelte";

  let prompt = "";
  let player_id = "";
  let style = "illustration"; // 기본값 설정
  let character = null;
  let imageUrl = null;
  let loading = false;
  let error = null;

  const styles = ["illustration", "anime", "3d", "American comic"];

  const CHARACTER_SERVER =
    import.meta.env.VITE_CHARACTER_SERVER || "http://localhost:18002";

  async function generateCharacter() {
    if (!prompt.trim()) {
      error = "Please enter a character description";
      return;
    }

    if (!player_id.trim()) {
      error = "Please enter a player ID";
      return;
    }

    loading = true;
    error = null;
    character = null;
    imageUrl = null;

    try {
      // Generate character
      const response = await fetch(`${CHARACTER_SERVER}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({player_id, prompt, style}),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to generate character");
      }

      const data = await response.json();
      character = data.character;

      pollForImage(player_id, data.character_id);
    } catch (e) {
      error = e.message;
    } finally {
      // loading = false;
    }
  }

  async function pollForImage(player_id, character_id) {
    let attempts = 0;
    const maxAttempts = 300;

    while (attempts < maxAttempts) {
      // Get generated image
      const imageResponse = await fetch(
        `${CHARACTER_SERVER}/api/image/${player_id}/${character_id}`
      );
      if (imageResponse.ok) {
        const data = await imageResponse.json();

        if (data.images && data.images.base) {
          imageUrl = data.images.base;
          loading = false;
          break;
        } else {
          error = "Image URL not found in response";
          loading = false;
          break;
        }
      }

      if (imageResponse.status !== 425) {
        error = "Image generation is taking too long or has failed.";
        loading = false;
        break;
      }

      attempts++;
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
</script>

<main>
  <h1>Character Generator</h1>

  <div class="input-section">
    <input
      type="text"
      bind:value={player_id}
      placeholder="Enter your player ID"
      class="player-id-input"
    />
    <select bind:value={style} class="style-select">
      {#each styles as s}
        <option value={s}>{s}</option>
      {/each}
    </select>
    <textarea
      bind:value={prompt}
      placeholder="Describe your character (e.g., a young wizard with blue eyes and long white hair)"
      rows="4"
    ></textarea>
    <button on:click={generateCharacter} disabled={loading}>
      {loading ? "Generating..." : "Generate Character"}
    </button>
  </div>

  {#if error}
    <div class="error">{error}</div>
  {/if}

  {#if character}
    <div class="character-section">
      <h2>{character.character_name}</h2>

      <div class="character-details">
        <div class="character-image">
          {#if loading}
            <div class="spinner"></div>
            <p style="text-align: center">
              Image generation is in progress... Please wait a moment.
            </p>
          {:else if imageUrl}
            <img src={imageUrl} alt={character.character_name} />
          {/if}
        </div>

        <div class="character-info">
          <h3>Description</h3>
          <p>{character.character_desc}</p>
          <h3>Background</h3>
          <p>{character.character_back}</p>
          <h3>Introduction</h3>
          <p>{character.character_introduction_line}</p>

          <h3>World View</h3>
          <p>{character.character_appearance.world_view}</p>
          <h3>Weapon</h3>
          <p>{character.character_appearance.weapon}</p>
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  :global(body) {
    background-color: #1a1a2e;
    color: #e6e6e6;
    font-family: "Arial", sans-serif;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #16213e;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  h1 {
    text-align: center;
    color: #e94560;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .input-section {
    margin: 2rem 0;
    background-color: #0f3460;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .player-id-input,
  .style-select,
  textarea {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 2px solid #e94560;
    border-radius: 6px;
    font-size: 1rem;
    background-color: #1a1a2e;
    color: #e6e6e6;
    transition: all 0.3s ease;
  }

  .player-id-input:focus,
  .style-select:focus,
  textarea:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 10px rgba(233, 69, 96, 0.3);
  }

  button {
    background-color: #e94560;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
    width: 100%;
  }

  button:hover {
    background-color: #ff6b6b;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(233, 69, 96, 0.3);
  }

  button:disabled {
    background-color: #4a4a4a;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .error {
    color: #ff6b6b;
    margin: 1rem 0;
    padding: 1rem;
    background-color: rgba(233, 69, 96, 0.1);
    border-radius: 6px;
    border-left: 4px solid #e94560;
  }

  .character-section {
    margin-top: 2rem;
    padding: 2rem;
    background-color: #0f3460;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .character-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1rem;
  }

  .character-image img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .character-info {
    padding: 1rem;
  }

  h2 {
    color: #e94560;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #e94560;
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.8rem 0;
    padding: 0.5rem;
    background-color: rgba(26, 26, 46, 0.5);
    border-radius: 4px;
  }

  li strong {
    color: #e94560;
  }

  .spinner {
    border: 4px solid rgba(233, 69, 96, 0.1);
    border-top-color: #e94560;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 1rem auto;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .character-details {
      grid-template-columns: 1fr;
    }

    main {
      padding: 1rem;
    }

    .input-section,
    .character-section {
      padding: 1rem;
    }
  }
</style>
