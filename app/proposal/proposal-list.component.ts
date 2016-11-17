import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component ({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'NBC NEWS', 'http://portfolio.nicoletingey.com', 'Ruby on Rails', 200, 20, 10, 'nbcnews@nbc.com')
	proposalTwo: Proposal = new Proposal(300, 'R and R Plumbing', 'http://portfolio.nicoletingey.com', 'Javascript', 100, 120, 10, 'randr@gmail.com')
	proposalThree: Proposal = new Proposal(99, 'Chip Cookies', 'http://portfolio.nicoletingey.com', 'HTML', 300, 220, 10, 'chip@cookies.com')

	proposals: Proposal[] = [
		this.proposalOne, 
		this.proposalTwo, 
		this.proposalThree
	]
}