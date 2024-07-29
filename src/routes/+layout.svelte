<script>
	import Menu from "$lib/shared/Menu.svelte";
    import "../app.css";
  </script>
  
<div class="flex flex-col min-h-screen">
  <Menu />
  <slot />
</div>