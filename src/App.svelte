<script>
	import './utils/init-firebase';
	import { onMount } from "svelte";
	import { getAuth, signInAnonymously  } from 'firebase/auth';
	import Chat from './components/Chat.svelte';
	import Welcome from './components/Welcome.svelte';

	let userName = '';
	let loggedIn = false;

	const auth = getAuth();

	async function onSubmitName() {
		const { user } = await signInAnonymously(auth);
		if (!user.uid) {
			alert('Something went wrong! Reload and try again.');
		}
	}

	onMount(() => {
		const unsubscriber = auth.onAuthStateChanged((auth) => {
			if (auth.uid) {
				loggedIn = true;
				userName = sessionStorage.getItem('userName');
			} else {
				loggedIn = false;
				userName = '';
				sessionStorage.clear();
			}
		});

		return unsubscriber;
	});

</script>

<main>
	{#if !loggedIn}
		<Welcome onSubmit={onSubmitName} />
	{:else}
		<Chat userName={userName} />
	{/if}
</main>
