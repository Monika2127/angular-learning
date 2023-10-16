import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  // it('should raise voteChanged event when upvoted', () => {
  //   let totalVote = null;
  //   component.voteChanged.subscribe(tv => totalVote = tv);

  //   component.upVote();

  //   //  in this line, if we can have bug, then  also this test will pass so to ignore that 
  //   expect(totalVote).not.toBeNull();

  //   // this line should be used as 
  //   expect(totalVote).toBe(1);
  // });

  it('should raise voteChanged event when upvoted', () => {
    let totalVote = null;
    component.voteChanged.subscribe(tv => {
      totalVote = tv
      expect(totalVote).toBe(1);
    });

    component.upVote();
  });
});


// event emitter is observable so we have to subscribe it to get the emitted data