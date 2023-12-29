<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from './ui/button';
</script>

<footer class="w-full flex flex-row items-center justify-center gap-x-3 py-4">
	<Button href="/"  variant="link">Subman</Button>
	<Separator orientation="vertical" />
	<Button
		href="/tc"
		variant="link">Terms of Use</Button
	>
</footer>
