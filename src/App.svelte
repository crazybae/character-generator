<script>
  import {onMount} from "svelte";

  let prompt = "";
  let character = null;
  let imageUrl = null;
  let loading = false;
  let error = null;

  const CHARACTER_SERVER =
    import.meta.env.VITE_CHARACTER_SERVER || "http://localhost:18002";

  async function generateCharacter() {
    if (!prompt.trim()) {
      error = "Please enter a character description";
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
        body: JSON.stringify({prompt}),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to generate character");
      }

      const data = await response.json();
      character = data.character;

      pollForImage(data.image_req_id);
    } catch (e) {
      error = e.message;
    } finally {
      // loading = false;
    }
  }

  async function pollForImage(id) {
    let attempts = 0;
    const maxAttempts = 300;

    while (attempts < maxAttempts) {
      // Get generated image
      const imageResponse = await fetch(`${CHARACTER_SERVER}/api/image/${id}`);
      if (imageResponse.ok) {
        const blob = await imageResponse.blob();
        imageUrl = URL.createObjectURL(blob);
        loading = false;
        break;
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

          <h3>Appearance</h3>
          <ul>
            <li>
              <strong>Gender:</strong>
              {character.character_appearance.gender}
            </li>
            <li><strong>Age:</strong> {character.character_appearance.age}</li>
            <li>
              <strong>Face:</strong>
              {character.character_appearance.face}
            </li>
            <li>
              <strong>Hair:</strong>
              {character.character_appearance.hair}
            </li>
            <li>
              <strong>Clothing:</strong>
              {character.character_appearance.cloth}
            </li>
            <li>
              <strong>Shoes:</strong>
              {character.character_appearance.shoes}
            </li>
            <li>
              <strong>Expression:</strong>
              {character.character_appearance.expression}
            </li>
            <li>
              <strong>World View:</strong>
              {character.character_appearance.world_view}
            </li>
          </ul>
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  .input-section {
    margin: 2rem 0;
  }

  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  .error {
    color: red;
    margin: 1rem 0;
    padding: 1rem;
    background-color: #ffebee;
    border-radius: 4px;
  }

  .character-section {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 4px;
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
    border-radius: 4px;
  }

  .character-info {
    padding: 1rem;
  }

  h2,
  h3 {
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.5rem 0;
  }

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top-color: #2563eb;
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
</style>
