import CardLivro from '@/components/CardLivro'
import Title from '@/components/Title'

async function carregarLivros(){
  const url = "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=5SEsP8gGIdZCLwqjbiUetqgSxVx3LVhW"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json.results
}

export default async function Home() {
  
  const livros = await carregarLivros()

  return ( //JSX
    <>
      <nav className="bg-slate-900 p-4">
        <ul>
          <li><a href="#"><h1 className="text-3xl font-bold">Eclipse LIbrary</h1></a></li>
        </ul>
        <ul>
          <li><a href="#">favoritos</a></li>
        </ul>
        <ul>
          <li><a href="#">livros</a></li>
        </ul>
        
      </nav>

     <Title>populares</Title>

      <section className='flex flex-wrap'>
        {livros.map(livro => <CardLivro livro={livro} /> )}
      </section>

     <Title>lançamentos</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}
