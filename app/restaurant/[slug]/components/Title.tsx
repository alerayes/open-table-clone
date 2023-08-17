export default function Title({name, mainImage}: {name: string; mainImage: string}) {
  return (
    <div className="mt-4 border-b pb-6">
        <h1 className="font-bold font-league font-tigher text-6xl">{name}</h1>
    </div>
  )
}
