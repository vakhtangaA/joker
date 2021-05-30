import React from "react";

import { Player } from "./Player";

export const Starter = () => {
	const players = ["|", "||", "|||", "IV"].map((e, i) => (
		<Player key={i} id={e} />
	));
	return (
		<div>
			<div className="players">{players}</div>
			<div className="config">
				<label htmlFor="gameTips">აირჩიეთ თამაშის ტიპი</label>
				<select name="gameTips" id="gameTips">
					<option value="სტანდარტული">სტანდარტული</option>
					<option value="ცხრიანები">ცხრიანები</option>
				</select>
				<label htmlFor="xishti">აირჩიეთ ხიშტი</label>
				<select name="xishti" id="xishti">
					<option value="200">200</option>
					<option value="500">500</option>
				</select>
			</div>
		</div>
	);
};
