const fs = require('fs');
const path = require('path');

// Array of entries (you can add as many as you want)
const entries = [
  {
    imageUrl:
      'https://raw.githubusercontent.com/Harshrawat27/data-to-finetune-doc-to-markdown/refs/heads/main/data/ai_chemistry_001.jpg',
    markdown: `## Artificial Intelligence in Chemistry: Current Trends and Future Directions

    Zachary J. Baum,* Xiang Yu, Philippe Y. Ayala, Yanan Zhao, Steven P. Watkins, and Qiongqiong Zhou
    
    **Cite This:** *J. Chem. Inf. Model.* 2021, 61, 3197–3212
    
    ---
    
    ### ABSTRACT
    
    The application of artificial intelligence (AI) to chemistry has grown tremendously in recent years. In this Review, we studied the growth and distribution of AI-related chemistry publications in the last two decades using the CAS Content Collection. The volume of both journal and patent publications have increased dramatically, especially since 2015. Study of the distribution of publications over various chemistry research areas revealed that analytical chemistry and biochemistry are integrating AI to the greatest extent and with the highest growth rates. We also investigated trends in interdisciplinary research and identified frequently occurring combinations of research areas in publications. Furthermore, topic analyses were conducted for journal and patent publications to illustrate emerging associations of AI with certain chemistry research topics. Notable publications in various chemistry disciplines were then evaluated and presented to highlight emerging cases. Finally, the occurrence of different classes of substances and their roles in the context of chemistry research were quantified, further detailing the popularity of AI adoption in the life sciences and analytical chemistry. In summary, this Review offers a broad overview of how AI has progressed in various fields of chemistry and aims to provide an understanding of its future directions.
    
    **KEYWORDS:** artificial intelligence, CAS Content Collection, analytical chemistry, biochemistry
    
    ---
    
    ### INTRODUCTION
    
    Artificial intelligence (AI) refers to the ability of machines to act in seemingly intelligent ways, making decisions in response to new inputs without being explicitly programmed to do so. Whereas typical computer programs generate outputs according to explicit sets of instructions, AI systems are designed to use data-driven models to make predictions. These AI models are generally first trained on representative data sets with known output values, thereby “learning” input–output relationships. The resulting trained models can then be used to predict output values of data similar to the training set or to generate new data. Many problems involving data with complex input–output relationships are difficult or impractical to model procedurally, thus creating an opportunity for AI.
    
    AI can feasibly be applied to various tasks in the field of chemistry, where complex relationships are often present in data sets. For example, the solubility of a new compound may be predicted either through equations based on empirical data or by using theoretical calculations. Alternatively, prediction of solubility may also be accomplished by an AI program that has developed structure–solubility relationships after being trained on numerous compounds with known solubilities. The use of AI for tasks, such as property prediction have proliferated in recent years due to explosive growth in computing power, open-source machine-learning frameworks, and increasing data literacy among chemists.^[1-9] AI implementations have proven to dramatically reduce design and experimental effort by enabling laboratory automation,^10 predicting bioactivities of new drugs,^11-13 optimizing reaction conditions,^14 and suggesting synthetic routes to complex target molecules.^15
    
    Although significant publicity has been given to AI and its application in chemistry, perspective on its use and development in chemistry is not obvious from the massive volume of available information. This Review uses the CAS Content Collection to contextualize the current AI landscape, classifying and quantifying chemistry publications related to AI from the years 2000–2020. The CAS Content Collection covers publications in 50 000 scientific journals from around the world in a wide range of disciplines, 62 patent authorities.
    
    **Received:** June 1, 2021  
    **Published:** July 15, 2021
    
    ---
    
    **Figure:** Analytical Chemistry vs Biochemistry publication trends from 2005-2020.
    
    **Figure:** Inorganic Chemistry vs Organic Chemistry publication trends from 2005-2020.
    
    © 2021 The Authors. Published by American Chemical Society`,
  },
  {
    imageUrl:
      'https://raw.githubusercontent.com/Harshrawat27/data-to-finetune-doc-to-markdown/refs/heads/main/data/ai_chemistry_002.jpg',
    markdown: `# Machine Learning in Chemistry

## Overview

Machine learning provides powerful tools for predicting chemical properties and accelerating material design. here is new data`,
  },
];

// Convert each entry into a messages object with \n escaped markdown
const allJsonObjects = entries.map(({ imageUrl, markdown }) => {
  const escapedMarkdown = markdown.replace(/\n/g, '\\n');

  return {
    messages: [
      {
        role: 'system',
        content:
          'You are an assistant that converts images of academic documents into clean markdown format.',
      },
      {
        role: 'user',
        content: 'Convert this image to markdown.',
      },
      {
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: {
              url: imageUrl,
            },
          },
        ],
      },
      {
        role: 'assistant',
        content: escapedMarkdown,
      },
    ],
  };
});

// Write to file-image_to_md.json as one JSON array
const outputPath = path.join(__dirname, 'file-image_to_md.json');
fs.writeFileSync(outputPath, JSON.stringify(allJsonObjects, null, 2), 'utf-8');

console.log('✅ file-image_to_md.json created with multiple entries.');
