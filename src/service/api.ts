import { createClient } from '@supabase/supabase-js'

const api = createClient(
  import.meta.env.PUBLIC_SUB_PATH,
  import.meta.env.PUBLIC_SUB_ANNONYMOUS_TOKEN
)

export default api

export async function fetchNewsletterData(uuid: any, whichData: any) {
  const { data, error, status } = await api
    .from('newsletter')
    .select(whichData)
    .eq('uuid', uuid)
    .single()
  
  return { data, error, status }
}

export async function putNewsletterData(content: any) {
  const { error } = await api.from('newsletter').upsert(content)
  
  return { error }
}
