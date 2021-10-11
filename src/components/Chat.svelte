<script>
  import { onMount } from "svelte";
  import {
    query,
    addDoc,
    collection,
    onSnapshot,
    getFirestore,
  } from 'firebase/firestore';
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
      userName: sessionStorage.getItem('userName'),
    };
  }

  async function onSend() {
    const messagePayload = createMessage(inputText);
    await addDoc(collection(firestore, '/chats'), messagePayload);

    inputText = '';
  }

  onMount(() => {
    const q = query(collection(firestore, 'chats'));
    const unsubscribe = onSnapshot(q, snapshot => {
      const messages = snapshot.docs.map(doc => doc.data());
      const sorted = messages.sort((m1, m2) => m1.timestamp - m2.timestamp);
      chatMessages = [...sorted];
      console.log(sorted)
    });

    return unsubscribe;
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