<script>
  import { onMount } from "svelte";
  import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore';
  import { getAuth } from 'firebase/auth';
  import Message from './Message.svelte';

  let inputText = '';
  let loading = false;
  let chatMessages = [];

  const firestore = getFirestore();
  const auth = getAuth();
  
  function createMessage(text, timestamp = Date.now()) {
    return {
      text,
      timestamp,
      userId: auth.currentUser.uid,
    };
  }

  async function onSend() {
    const messagePayload = createMessage(inputText);
    await addDoc(collection(firestore, '/chats'), messagePayload);

    inputText = '';
  }
  
  onMount(() => {
    
  });

  export let userName;
</script>

<div class="chat-container">
  
  {#each chatMessages as message, idx (idx)}
    <Message message={message} />
  {/each}

  <input class="chat-input" type="text" bind:value={inputText} placeholder={`Send a message as ${userName}`}>
  <button on:click={onSend}>Submit</button>
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