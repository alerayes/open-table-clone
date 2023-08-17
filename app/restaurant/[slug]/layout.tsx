import Header from "./components/Header";

export default function RestaurantLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: {slug: string}
}) {
    return (
        <main>
            <div className="flex m-auto w-[90%] justify-between items-start mt-10">
                {children}
            </div>
        </main>
    )
}