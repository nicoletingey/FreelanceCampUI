import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"

	documents: Document [] = [
		{
			title: "My First Doc",
			description: "gibberish asdfasdf",
			file_url: "http://youtube.com",
			updated_at: "11/16/16",
			image_url: "http://youtube.com",
		},
		{
			title: "My Second Doc",
			description: "gibberish asdfasdf",
			file_url: "http://youtube.com",
			updated_at: "11/16/16",
			image_url: "http://youtube.com",
		},
		{
			title: "My Last Doc",
			description: "gibberish asdfasdf",
			file_url: "http://youtube.com",
			updated_at: "11/16/16",
			image_url: "http://youtube.com",
		}
	]
}