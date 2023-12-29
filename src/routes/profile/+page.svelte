<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

	export let data;
</script>

<hr/>
<div class=" flex justify-end p-4">
	<h4 class="text-xl font-bold">Hello, {data.firstname} !🎉</h4>
</div>
<hr/>
<div class="grow flex flex-col items-center justify-center gap-y-4">
	

	<div class="flex flex-row items-center gap-x-3">
		
		<Button
			on:click={() => {
				fetch('/profile', {
					method: 'DELETE'
				}).then(() => {
					goto('/');
				});
			}}
			variant="destructive">Accout Deletion</Button
		>
	</div>
</div>
