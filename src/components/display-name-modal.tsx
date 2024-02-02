import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { toast } from "sonner";

export default function DisplayNameModal({open}) {

    const { updateDisplayName } = useContext(AuthContext);

    const [displayName, setDisplayName] = useState('');

    const handleUpdateDisplayName = async () => {
        if(displayName.trim() === ''){
            toast.error("Vamos lá, escolha um nome para exibir para os outros jogadores", {closeButton: true, duration: 3000, position: "top-right"});
            return;
        }

        await updateDisplayName(displayName);
    }

  return (
        <Dialog open={open}>
            <DialogTrigger/>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Seja bem-vindo ao Awakening RPG</DialogTitle>
                    <DialogDescription>Para começar, por favor, escolha um nome para exibir para os outros jogadores</DialogDescription>
                </DialogHeader>
                    <Input
                        placeholder="Nome de exibição"
                        className="h-14"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                <DialogFooter>
                        <Button
                            onClick={handleUpdateDisplayName}
                        >
                            Confirmar
                        </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
  )
}
