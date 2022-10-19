<script lang="ts">
  import CardComponent from './cardComponent.svelte'
  import * as Card from './card'

  export let topic:any
</script>

<CardComponent as="li">
  <Card.Topic>{ topic }</Card.Topic>
  <Card.Description>
    <slot />
  </Card.Description>
</CardComponent>
