<script lang="ts">
	import * as config from '$lib/config'
</script>

<nav>
	<a href="/" class="title">
		<b>{config.blog_title}</b>
	</a>

	<ul class="links">
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		padding-block: var(--size-7);

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

		@media (min-width: 768px) {
			display: flex;
			justify-content: space-between;
		}

		.links {
			margin-block: var(--size-7);

			@media (min-width: 768px) {
				display: flex;
				gap: var(--size-7);
				margin-block: 0;
			}
		}

		a {
			color: inherit;
			text-decoration: none;
		}
	}
</style>