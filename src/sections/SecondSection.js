import React, { useRef, useEffect, useState } from 'react';
import { Zigzag } from '../styling/Zigzag';
import './SecondSection.scss';

export function SecondSection(props) {
	const { scrollPosition, windowHeight, borderWidth } = props;
	const [titleTextIsVisible, setTitleTextIsVisible] = useState(false);
	const titleTextVisibilityMarker = useRef(null);

	useEffect(() => {
		if (titleTextVisibilityMarker.current) {
			setTitleTextIsVisible(
				titleTextVisibilityMarker.current.getBoundingClientRect().bottom - windowHeight - borderWidth < 0);
		}
	}, [scrollPosition, windowHeight, borderWidth]);

	return (
		<div className="second-section">
			<div ref={titleTextVisibilityMarker} className="title-section">
				<div className={`zigzag-wrapper${titleTextIsVisible ? " visible" : ""}`}>
					<Zigzag className="zigzag" />
				</div>
				<div className="text-wrapper">
					<h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>About</h2>
				</div>
				<div className="text-wrapper">
					<h2 className={`text${titleTextIsVisible ? " visible" : ""}`}>Me.</h2>
				</div>
			</div>
			<div className="content-section">
				<p className="text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae nam deleniti cum itaque, sapiente aliquam quis officia ratione voluptatum ipsa voluptate minima, illo vitae quos quaerat architecto. Accusantium quisquam asperiores, rerum sunt dolores veniam saepe facilis commodi fugit cumque similique laborum voluptatem quia eveniet! Deserunt repellat fugiat error sunt consectetur, numquam, explicabo atque cumque totam deleniti unde doloremque illum. Aspernatur, ratione dolor. Quaerat nobis sint unde ratione fugiat ut rerum incidunt ea architecto fugit quos voluptatum quidem, ad nostrum optio maiores, nisi, iure aliquid eum recusandae tempore officia blanditiis nulla! Non quod quaerat culpa itaque eaque exercitationem? Esse ex repellat maxime reiciendis, quam voluptatibus eaque repudiandae explicabo temporibus possimus commodi animi exercitationem architecto numquam odit dolore saepe neque consectetur! Nihil accusamus nemo deleniti dolore eius porro? Qui maiores saepe sapiente, corrupti doloremque, obcaecati minima ex dolor mollitia nostrum dicta nihil nulla repellendus enim aut eaque reprehenderit necessitatibus deserunt in impedit quibusdam magnam dolorum! Beatae sit cum numquam praesentium saepe quis, quo provident mollitia aperiam. Fugit eum, nulla autem natus provident voluptatibus asperiores distinctio. Ex, ab? Voluptate a provident nobis corrupti dolorem sunt facilis beatae architecto illum doloremque dolores asperiores quas dolorum quibusdam natus quos, aperiam praesentium! Magni ad quam esse dolor? Ab nisi, repellat omnis error unde praesentium culpa, odit quis pariatur, eum provident a cupiditate voluptatem hic reiciendis ad ex natus nulla ut sequi voluptas quidem iste? Aperiam quo dolorum nobis accusamus dolor distinctio eum accusantium vitae cumque molestiae. Iste nobis enim error iure quam atque, omnis natus veritatis est accusamus expedita ullam. Error recusandae repellendus, quam reiciendis amet sint molestiae expedita voluptatem ipsum minima consequuntur eum adipisci sit ad, facilis vitae id hic quo quae fuga. Quibusdam ipsam quas quae praesentium totam! Saepe in asperiores facere possimus culpa fugit ullam animi fuga laboriosam quidem! Nesciunt, laboriosam veritatis.
				</p>
				<div className="skills-section">

				</div>
			</div>
		</div>
	);
}
