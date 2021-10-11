<script>
	import Chat from './components/Chat.svelte';
	import Welcome from './components/Welcome.svelte';

	let userName = sessionStorage.getItem('userName');
	let loggedIn = !!userName;

	function onAuthComplete() {
		loggedIn = true;
		userName = sessionStorage.getItem('userName');
	}

	function onSubmitName() {
		return new Promise(resolve => {
			console.log('logged in!');
			setTimeout(resolve, 3000);
			onAuthComplete();
		})
	}

</script>

<main>
	{#if !loggedIn}
		<Welcome onSubmit={onSubmitName} />
	{:else}
		<Chat userName={userName} />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>