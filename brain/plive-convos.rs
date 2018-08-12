! version = 2.0

+ what can you do
- You can type in \n
^ "weather" to check the weather, \n
^ "toilets" to check the nearest toilets, \n
^ "music" for music suggestions, \n
^ "medic" for first aid suggestions, \n
^ "themes" for party themes, and \n
^ "games" for road trip game suggestions \n

+ (weather|what is the weather like|will it rain *){weight=10}
- Here's the weather results! https://goo.gl/9DRLm9

+ (toilets|where are the nearest toilets|nearest toilets){weight=10}
- Here are the nearest toilets! https://goo.gl/WxkiVd

+ (music|suggest music|i want to listen to music){weight=10}
- Here's the top 10 music I found! https://goo.gl/MMXgUQ

+ (medic|first aid|how do i treat *){weight=10}
- Here is the manual for first aid. https://goo.gl/AfRZw7

+ (themes|i am throwing a party|suggest party themes){weight=10}
- Here are suggestions for party themes. https://goo.gl/cXYXPw

+ (games|we need road games|road games|can you suggest games){weight=10}
- Here are family friendly games to play in your car! https://goo.gl/eFict8

+ (who made you|who are your creators|who are your developers){weight=10}
- My creators are Chris Rabe, Dipen Patel, and Casey Huang