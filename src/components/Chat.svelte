<script>
  import { onMount } from "svelte";

  let loading = false;
  let chatMessages = [];
  
  export let userName;

  onMount(() => {
    
  });
</script>

<div class="chat-container">
  
  <input class="chat-input" type="text" placeholder={`Send a message as ${userName}`}>
</div>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
  }

  .chat-input {
    border-radius: 4px;
    padding: 8px 6px;
    width: 70%;
  }
</style>