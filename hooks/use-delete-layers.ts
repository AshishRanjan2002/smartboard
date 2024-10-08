import {useSelf,useMutation} from "@/liveblocks.config";

export const useDeleteLayers=()=>{
    let selection =useSelf((me)=> me.presence.selection);

    if(selection===null){
        selection=[];
    }
   

    return useMutation((
        {storage,setMyPresence}
    )=>{
        const liveLayers=storage.get("layers");
        const liverLayerIds=storage.get("layerIds");

        
        for(const id of selection){
            liveLayers.delete(id);

            const index=liverLayerIds.indexOf(id);
            if(index!== -1){
                liverLayerIds.delete(index);
            }
        }
        setMyPresence({selection:  []},{addToHistory:true})
    },[selection]);
}