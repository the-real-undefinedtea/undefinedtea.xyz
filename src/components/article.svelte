<script lang="ts">
  import CardComponent from './cardComponent.svelte'
  import * as Card from './card'

  export let article:any
</script>

<CardComponent>
  <Card.Topic to="{ article.url }">{ article.frontmatter.topic }</Card.Topic>
  <Card.Eyebrow as="time" decorate>{ new Date(article.frontmatter.publish).toLocaleDateString('en-Us', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }) }</Card.Eyebrow>
  <Card.Description>
    { article.frontmatter.description }
  </Card.Description>
  <Card.CTA>Read article</Card.CTA>
</CardComponent>
