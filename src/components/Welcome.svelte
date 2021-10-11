<script>
  let name = "Akshat";
  let loading = false;

  export let onSubmit;

  async function startSession() {
    if (!name || name.length <= 4) return alert('Please enter something!!!')

    loading = true;
    sessionStorage.setItem('userName', name);
    await onSubmit();

    loading = false;
  }
  
</script>

<div>
  <h1>Welcome, please enter your name</h1>
  <input type="text" bind:value={name}>
  <button on:click={startSession}>Submit</button>

  {#if loading}
    <p>Loading...</p>
  {/if}
</div>