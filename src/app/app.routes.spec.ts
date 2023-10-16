import { routes } from './app.module';
import { GithubComponent } from './github/github.component';

//  should contain that route

describe('Routes', () => {
    it('should contain route for /followers', () => {
        expect(routes).toContain(
            {
                path: 'followers',
                component: GithubComponent
            }
        )
    })
})