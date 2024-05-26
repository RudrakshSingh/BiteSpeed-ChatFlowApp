Chatbot Flow Builer :- https://bite-speed-chat-flow-lbao9kpaf-rudrakshsinghs-projects.vercel.app/
netlify link :- https://chatflowrudraksh.netlify.app/
Chatbot Flow Builder is a simple application built using React and React Flow, allowing users to create and manage chatbot flows. This application provides an intuitive interface for connecting messages and defining the order of execution.

Features
Text Node

Supports text messages for building chatbot flows.
Multiple text nodes can be added to a single flow.
Nodes can be added via drag-and-drop from the Nodes Panel.
Nodes Panel

Houses all kinds of nodes supported by the Flow Builder.
Designed to be extensible for adding more node types in the future.
Edge

Connects two nodes together to define the flow of conversation.
Source Handle

Origin of a connecting edge.
Can have only one edge originating from a source handle.
Target Handle

Target of a connecting edge.
Can have more than one edge connecting to a target handle.
Settings Panel

Replaces the Nodes Panel when a node is selected.
Allows editing the text of the selected text node.
Save Button

Saves the flow to local storage.
Displays an error if there are multiple nodes and more than one node has empty target handles.
Installation
To get started with the Chatbot Flow Builder, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/chatbot-flow-builder.git
cd chatbot-flow-builder
Install dependencies:
bash
Copy code

npm install
or

bash
Copy code
yarn install

Usage
To run the development server, use the following command:

bash
Copy code
npm run dev
or
bash
Copy code
yarn dev

Open your browser and navigate to http://localhost:3000 to access the Chatbot Flow Builder application.

Contributing
Contributions are welcome! Please open an issue or submit a pull request with your improvements.

Contact
For any questions or suggestions, please open an issue or contact the maintainer.

