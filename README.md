The project was created using React Native CLI with Redux as the main global storage.

Activation:
 - NPM Install to set up Nodes Modules
 - Than NPM Start
 - Along with the activation of the emulator or equivelent that you are using. I used npx react-native run-android

CodeBase:
Overall the process when well at first, though admittibly I was somewhat rusty with Redux but quickly became accomstomed to it again. However an emulator malfunction pushed development back longer than I would have liked. Consequently I did not have time to finish certain parts of the application (unit tests, fix code in pilots screen, etc).

What would I change?:
If I had more time I would correct the errors in the Pilots page (I am quite certain it is a Redux issue that I would have too debug). Than finish the functionality for the favorites page. In addition to this the Guest page would have been pretty straight forward. I considered just making a separate page with a separate navigator path for the guest version of the Pilots page. I would have to decide on the merits of that or simply making just a single Pilots page that is dynamic and changes depending on whether a login user or a guest user accesses it.

In addition, even though it is not required I would probably for the sake of completion create a Signup functionality so that a guest could become an official user.  Along with password recovery for saved users. Though in that regard I would probalby just look into creating a proper database rather than using Redux as I feel it would be more wieldy.

Last thing would simply creating proper styling pages for all the screens. While also seeing how practical it would be to add images for the various pilots taken from the api. 
