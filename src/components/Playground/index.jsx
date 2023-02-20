import { Grid, GridItem } from '@chakra-ui/react';
import Deck from '../Deck';
import { useGameContext } from '../GameContext';
import {useEffect} from 'react';

const Playground = () => {
	const { cards, refreshCards } = useGameContext();

	useEffect(() => {
		refreshCards();
	}, []);  

	return (
		<>
			<Grid templateColumns="repeat(4, 1fr)" gap={2}>			
				{cards.map((card, index)=> {
					return (
						<GridItem key={index} w="100%" h="40">
							<Deck uId={index} id={card.id} image={card.image} isShowing={card.isShowing}/>
						</GridItem>
					);
				})}
			</Grid>
		</>
	);
};

export default Playground;
