import React from "react";
import { StyledFolder } from "../../styles/components";
import FolderIcon from "../FolderIcon";

const Folder = ({ name, icons }) => {
	const folderIcons = [];
	for (let i = 0; i < icons; i++) {
		folderIcons.push(<FolderIcon key={i} icon={i} />);
	}

	return (
		<StyledFolder>
			<article className="folder__container">{folderIcons}</article>
			<header className="folder__name">
				<h3> {name} </h3>
			</header>
		</StyledFolder>
	);
};

export default Folder;
