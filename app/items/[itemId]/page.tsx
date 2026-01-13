
import getItem from "./_services";
import TodoUpdate from "./_components/TodoUpdate";

interface PageProps {
    params: Promise<{ itemId: number }>;
}
export default async function TodoItem({ params }: PageProps) {
    const { itemId } = await params;
    const res = await getItem(itemId);

    return (
        <main className="main bg-white">
            <TodoUpdate data={res} />
        </main>
    )
}
