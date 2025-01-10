import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface CommentProps {
    id: number,
    Commentaire: string,
    nature: string
}

interface CommentsListProps {
    commentsList: CommentProps[]
}


export function CommentsDisplayer({ commentsList } : CommentsListProps) {
    return (
        <Table className="rounded-xl shadow-xl p-3">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-sm text-center text-primary w-12">Idx</TableHead>
                    <TableHead className="text-xl text-center text-primary">Commentaires</TableHead>
                    <TableHead className="text-xl text-center text-primary w-fit">Natures</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {commentsList.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-sm">{index + 1}</TableCell>
                        <TableCell className="font-medium text-center">{item.Commentaire}</TableCell>
                        <TableCell className={`font-medium text-center ${item.nature === "Positif" ? "text-green-500" : item.nature === "Négatif" ? "text-destructive" : "text-yellow-400"}`}>
                            <p className={`p-1 rounded-xl ${item.nature === "Positif" ? "bg-green-400/20" : item.nature === "Négatif" ? "bg-red-400/20" : "bg-yellow-400/20"}`}>
                                {item.nature}
                            </p>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}