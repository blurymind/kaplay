import { useEffect, useState } from "react";
import { useProject } from "../../hooks/useProject";
import FileEntry from "./FileEntry";
import FileFolder from "./FileFolder";

const FileTree = () => {
    const { getProjectMode, project: { files } } = useProject();
    const [scenes, setScenes] = useState(
        files.filter((file) => file.kind === "scene"),
    );
    const [kaplay, setKaplay] = useState(
        files.filter((file) => file.kind === "kaplay")[0],
    );
    const [main, setMain] = useState(
        files.filter((file) => file.kind === "main")[0],
    );
    const [assets, setAssets] = useState(
        files.filter((file) => file.kind === "assets")[0],
    );

    useEffect(() => {
        setScenes(files.filter((file) => file.kind === "scene"));
        setKaplay(files.filter((file) => file.kind === "kaplay")[0]);
        setMain(files.filter((file) => file.kind === "main")[0]);
        setAssets(files.filter((file) => file.kind === "assets")[0]);
    }, [files]);

    return (
        <div className="flex flex-col p-2 gap-2">
            <FileFolder level={1} title="Scenes">
                {scenes.length === 0
                    ? <li className="text-gray-500 text-xs">No scenes yet</li>
                    : (
                        scenes.map((file) => {
                            return (
                                <li key={file.name}>
                                    <FileEntry
                                        file={file}
                                    />
                                </li>
                            );
                        })
                    )}
            </FileFolder>
            <FileFolder level={0} toolbar={false}>
                <li>
                    <FileEntry file={main} />
                    {getProjectMode() === "project" && (
                        <>
                            <FileEntry file={kaplay} />
                            <FileEntry file={assets} />
                        </>
                    )}
                </li>
            </FileFolder>
        </div>
    );
};

export default FileTree;
