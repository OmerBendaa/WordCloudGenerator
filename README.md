# WordCloudGenerator
running the app
1. run
   docker compose app

   The web app will run on port 80
   The server will run on port 3000

explaination for fontsize logic :

Words with the highest value get the largest font size (MAX_FONT_SIZE).

Words with the lowest value get the smallest font size (MIN_FONT_SIZE).

Words with intermediate values have a proportional font size based on their value relative to the maximum.

This approach ensures that the font size reflects the word’s relative importance or frequency, creating a visual effect where more frequent or important words appear larger, and less frequent or less important words appear smaller.

the code for the fontsize logic is in the file : frontend/src/Components/WordsCloud.tsx
