import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  //  Action
  let comp: VoteComponent;

  beforeEach(() => {
    comp = new VoteComponent;
  })

  it('should increment votes when upvoted', () => {
    // Act
    comp.upVote();

    // Assert
    expect(comp.totalVotes).toBe(1);
  });

  it('should decrement votes when downvoted', () => {
    comp.downVote();

    expect(comp.totalVotes).toBe(-1);
  });
});


// if we move the instance of the component in the describe method then both 'it' mwthod will get correlated, it won't be isolated
// means, if totalVotes is incremented by 1 and has value 1 then on downVoting, it is expected to be 0 not -1;
// so to isolate them from one another, we have to use beforeEach() function, in this function, it will call the callback function
// before each test (set up)

// afterEach() function will run after each test for cleanup (tear down)
// beforeAll() will execute once before all tests
// afterAll() will execute once after all tests 