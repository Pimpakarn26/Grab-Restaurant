import Loading from "../components/Loading";
import loadingAnimetion from "../loading/loading.json";

const SuspenseContent = () =>{
    return (
    <div className="w-full h-screen text-grey-300 bg-base-100">
        <div className="flex item-center justify-center h-full">
        <Loading animetion={loadingAnimetion} />
        </div>
    </div>
    );
};
export default SuspenseContent;