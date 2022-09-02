import { Player, PlayerProps } from './Player';

export default {
    title: 'Player',
    component: Player,
}

const Template = (args: PlayerProps) => (
    <Player
        {...args}
    />
)

export const Default = () => Template.bind({});