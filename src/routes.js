import Home from './components/Home.vue';
import UserRoutes from './components/user/user.route';
import AuthRoutes from './components/auth/auth.route';
import CharacterRoutes from './components/character/character.route';
import DungeonRoutes from './components/dungeon/dungeon.route';

export const routes = [
    {
        path: '/',
        component: Home
    }
];

routes.push(...DungeonRoutes);
routes.push(...CharacterRoutes);
routes.push(...UserRoutes);
routes.push(...AuthRoutes);

export default routes
