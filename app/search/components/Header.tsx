import SearchBar from "@/app/components/SearchBar";

export default function Header() {
    return (
     <div 
        className="h-64 p-2 flex opacity-3"
        style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
     >
        <SearchBar />
     </div>
    )
}