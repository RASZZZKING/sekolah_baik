interface Quiz {
  data: QuizExam[];
}

export const dataQuiz: Quiz = {
  data: [
    {
      id: 1,
      questions:
        "The ancient Egyptians built pyramids as tombs for their pharaohs. These massive structures were designed to last for eternity, preserving the pharaoh's body and belongings for the afterlife. They believed that a well-preserved body was essential for the soul's journey to the next world.",
      answer_option: [
        { answer: "The construction of the pyramids.", is_true_option: false },
        {
          answer: "The purpose of the pyramids in ancient Egypt.",
          is_true_option: true,
        },
        {
          answer: "The afterlife beliefs of ancient Egyptians.",
          is_true_option: false,
        },
        { answer: "The pharaohs' power in Egypt.", is_true_option: false },
      ],
      explanation_for_true_answers:
        "The passage mainly explains the purpose of the pyramids, which were built to preserve the pharaoh’s body for the afterlife.",
    },
    {
      id: 2,
      questions:
        "Over the past decade, climate change has become one of the most pressing issues facing the world. Scientists have warned that without immediate action, the effects will be irreversible. Rising sea levels, more extreme weather events, and loss of biodiversity are just a few examples of the consequences we could face.",
      answer_option: [
        { answer: "The effects of climate change.", is_true_option: false },
        {
          answer: "The urgency of addressing climate change.",
          is_true_option: true,
        },
        {
          answer: "The role of scientists in climate change research.",
          is_true_option: false,
        },
        {
          answer: "Examples of extreme weather events.",
          is_true_option: false,
        },
      ],
      explanation_for_true_answers:
        "The main idea is the urgency of addressing climate change to prevent irreversible damage.",
    },
    {
      id: 3,
      questions:
        "Social media platforms have transformed the way people communicate and share information. With billions of users worldwide, these platforms have become powerful tools for marketing, entertainment, and social movements. However, they also raise concerns about privacy, misinformation, and the impact on mental health.",
      answer_option: [
        {
          answer: "The rise of social media platforms.",
          is_true_option: false,
        },
        {
          answer: "The advantages and disadvantages of social media.",
          is_true_option: true,
        },
        {
          answer: "The impact of social media on privacy.",
          is_true_option: false,
        },
        { answer: "Social media as a marketing tool.", is_true_option: false },
      ],
      explanation_for_true_answers:
        "The paragraph discusses both the benefits and issues related to social media, making it about the advantages and disadvantages.",
    },
    {
      id: 4,
      questions:
        "Advances in artificial intelligence (AI) are rapidly transforming industries from healthcare to finance. AI is capable of analyzing vast amounts of data and performing complex tasks that once required human intelligence. As AI becomes more integrated into daily life, there are growing concerns about job displacement and ethical considerations.",
      answer_option: [
        {
          answer: "The impact of AI on healthcare and finance.",
          is_true_option: false,
        },
        { answer: "The potential and challenges of AI.", is_true_option: true },
        { answer: "The ethical concerns of AI.", is_true_option: false },
        { answer: "How AI analyzes data.", is_true_option: false },
      ],
      explanation_for_true_answers:
        "The main topic is the potential of AI and the challenges it presents, such as job displacement and ethics.",
    },
    {
      id: 5,
      questions:
        "Music therapy is increasingly recognized as an effective treatment for various mental health conditions. Research shows that music can reduce anxiety, improve mood, and even help with cognitive functioning. While not a cure, music therapy provides an alternative approach to traditional mental health treatments.",
      answer_option: [
        { answer: "The benefits of music therapy.", is_true_option: true },
        {
          answer: "How music affects cognitive functioning.",
          is_true_option: false,
        },
        {
          answer: "Music as a cure for mental health conditions.",
          is_true_option: false,
        },
        { answer: "Research on anxiety treatments.", is_true_option: false },
      ],
      explanation_for_true_answers:
        "The passage focuses on the benefits of music therapy for mental health conditions.",
    },
    {
      id: 6,
      questions:
        "Renewable energy sources such as solar, wind, and hydropower are gaining traction as the world looks for sustainable alternatives to fossil fuels. These energy sources are not only environmentally friendly, but they are also becoming more cost-effective due to advances in technology. However, challenges remain in terms of energy storage and grid integration.",
      answer_option: [
        {
          answer: "The challenges of integrating renewable energy.",
          is_true_option: false,
        },
        {
          answer: "The rise of renewable energy as a sustainable alternative.",
          is_true_option: true,
        },
        {
          answer: "The cost-effectiveness of renewable energy.",
          is_true_option: false,
        },
        {
          answer: "The environmental benefits of renewable energy.",
          is_true_option: false,
        },
      ],
      explanation_for_true_answers:
        "The main idea is that renewable energy sources are becoming popular as sustainable alternatives to fossil fuels.",
    },
    {
      id: 7,
      questions:
        "Exercise has numerous health benefits, from reducing the risk of chronic diseases to improving mental health. Regular physical activity can boost mood, improve sleep, and increase energy levels. It is recommended that adults engage in at least 150 minutes of moderate-intensity exercise each week for optimal health.",
      answer_option: [
        {
          answer: "The mental health benefits of exercise.",
          is_true_option: false,
        },
        {
          answer: "The importance of regular exercise for overall health.",
          is_true_option: true,
        },
        {
          answer: "The amount of exercise recommended for adults.",
          is_true_option: false,
        },
        {
          answer: "The effects of exercise on energy levels.",
          is_true_option: false,
        },
      ],
      explanation_for_true_answers:
        "The passage emphasizes the overall importance of regular exercise for health benefits.",
    },
    {
      id: 8,
      questions:
        "The internet has revolutionized the way people access information. From news articles to academic journals, nearly anything can be found online with just a few clicks. However, the vast amount of information available also means that misinformation and disinformation can spread quickly, making it more important than ever to critically evaluate sources.",
      answer_option: [
        {
          answer: "The spread of misinformation online.",
          is_true_option: false,
        },
        {
          answer: "The importance of critically evaluating online information.",
          is_true_option: true,
        },
        {
          answer: "The internet's role in accessing information.",
          is_true_option: false,
        },
        {
          answer: "The availability of academic resources online.",
          is_true_option: false,
        },
      ],
      explanation_for_true_answers:
        "The main focus of the passage is on the importance of critically evaluating online information.",
    },
    {
      id: 9,
      questions:
        "Urbanization is on the rise as more people move to cities in search of better opportunities. While cities offer better access to education, healthcare, and jobs, rapid urbanization also comes with challenges. Overcrowding, pollution, and the strain on infrastructure are just some of the issues that city planners must address.",
      answer_option: [
        {
          answer: "The challenges of rapid urbanization.",
          is_true_option: true,
        },
        { answer: "The benefits of living in a city.", is_true_option: false },
        {
          answer: "How city planners handle urban issues.",
          is_true_option: false,
        },
        {
          answer: "The rise of urbanization worldwide.",
          is_true_option: false,
        },
      ],
      explanation_for_true_answers:
        "The passage discusses the challenges that arise from rapid urbanization, making it the central topic.",
    },
    {
      id: 10,
      questions:
        "Eating a balanced diet is essential for maintaining good health. A diet rich in fruits, vegetables, whole grains, and lean proteins can provide the nutrients needed to support bodily functions. Additionally, avoiding excessive consumption of processed foods, sugar, and salt can help prevent chronic diseases like diabetes and heart disease.",
      answer_option: [
        { answer: "The importance of a balanced diet.", is_true_option: true },
        {
          answer: "The risks of consuming processed foods.",
          is_true_option: false,
        },
        {
          answer: "Nutrients needed for bodily functions.",
          is_true_option: false,
        },
        { answer: "How to prevent chronic diseases.", is_true_option: false },
      ],
      explanation_for_true_answers:
        "The passage emphasizes the overall importance of maintaining a balanced diet for health.",
    },
  ],
};

export const dataQuiz2: Quiz = {
  data: [
    {
      id: 1,
      questions:
        "Read the following passage:\n\nThe Amazon rainforest is home to millions of species, many of which are not found anywhere else in the world. Deforestation is threatening this delicate ecosystem, causing widespread loss of biodiversity.\n\nWhat is the main topic of the passage?",
      answer_option: [
        {
          answer: "The uniqueness of species in the Amazon rainforest",
          is_true_option: false,
        },
        {
          answer: "The effects of deforestation on the Amazon rainforest",
          is_true_option: true,
        },
        {
          answer: "The geography of the Amazon rainforest",
          is_true_option: false,
        },
        {
          answer: "The biodiversity of the Amazon rainforest",
          is_true_option: false,
        },
      ],
    },
    {
      id: 2,
      questions:
        "Read the following passage:\n\nAdvances in technology have transformed communication. With the rise of smartphones and social media, people can now connect across vast distances instantly. However, this has also led to concerns about privacy and the loss of face-to-face interactions.\n\nWhat is the main idea of the passage?",
      answer_option: [
        {
          answer: "Technology makes communication easier.",
          is_true_option: false,
        },
        {
          answer:
            "Technology has both benefits and drawbacks for communication.",
          is_true_option: true,
        },
        {
          answer: "Smartphones have taken over communication.",
          is_true_option: false,
        },
        {
          answer: "Face-to-face interactions are becoming less common.",
          is_true_option: false,
        },
      ],
    },
    {
      id: 3,
      questions:
        "Read the following passage:\n\nHoneybees are vital for pollinating crops, yet their populations have been declining due to pesticide use and habitat destruction. Scientists are working to develop solutions to help protect bee populations.\n\nWhat is the main purpose of this passage?",
      answer_option: [
        {
          answer:
            "To describe the importance of honeybees and the threats they face",
          is_true_option: true,
        },
        {
          answer: "To explain the role of honeybees in agriculture",
          is_true_option: false,
        },
        {
          answer: "To promote awareness of pesticide dangers",
          is_true_option: false,
        },
        {
          answer: "To provide solutions for declining bee populations",
          is_true_option: false,
        },
      ],
    },
    {
      id: 4,
      questions:
        "Read the following passage:\n\nMany people believe that regular exercise is crucial for maintaining good health. It not only strengthens the heart but also improves mental health and enhances sleep quality.\n\nWhat is the main purpose of this passage?",
      answer_option: [
        { answer: "To promote mental health benefits", is_true_option: false },
        {
          answer: "To explain the various benefits of exercise",
          is_true_option: true,
        },
        {
          answer: "To describe how exercise improves sleep",
          is_true_option: false,
        },
        { answer: "To suggest ways to exercise", is_true_option: false },
      ],
    },
    {
      id: 5,
      questions:
        "Read the following passage:\n\nThe Great Wall of China, one of the greatest wonders of the world, was built over 2,000 years ago. It was constructed to protect Chinese states from invasions by various nomadic groups.\n\nWhat is the main idea of the passage?",
      answer_option: [
        {
          answer: "The Great Wall of China is a historical monument.",
          is_true_option: false,
        },
        {
          answer: "The Great Wall of China was built for defense.",
          is_true_option: true,
        },
        {
          answer: "The Great Wall of China took many years to build.",
          is_true_option: false,
        },
        {
          answer: "Nomadic groups frequently attacked China.",
          is_true_option: false,
        },
      ],
    },
    {
      id: 6,
      questions:
        "Read the following passage:\n\nWater conservation is an essential practice to ensure the sustainability of our water resources. Simple steps such as fixing leaks and using water-efficient appliances can help reduce water waste.\n\nWhat is the main purpose of this passage?",
      answer_option: [
        { answer: "To explain how water waste occurs", is_true_option: false },
        { answer: "To encourage water conservation", is_true_option: true },
        {
          answer: "To describe the importance of fixing leaks",
          is_true_option: false,
        },
        {
          answer: "To highlight the value of water resources",
          is_true_option: false,
        },
      ],
    },
    {
      id: 7,
      questions:
        "Read the following passage:\n\nTigers are apex predators, meaning they are at the top of the food chain in their ecosystem. They help maintain the balance of the ecosystem by controlling the populations of herbivores such as deer and wild boar.\n\nWhat is the main topic of the passage?",
      answer_option: [
        { answer: "The diet of tigers", is_true_option: false },
        {
          answer: "The role of tigers in maintaining ecosystem balance",
          is_true_option: true,
        },
        { answer: "The dangers faced by tigers", is_true_option: false },
        { answer: "The food chain of tigers", is_true_option: false },
      ],
    },
    {
      id: 8,
      questions:
        "Read the following passage:\n\nThe Industrial Revolution marked a significant change in how goods were produced. Factories replaced small workshops, and new machines were invented to speed up production.\n\nWhat is the main idea of the passage?",
      answer_option: [
        {
          answer: "The Industrial Revolution led to faster production methods.",
          is_true_option: true,
        },
        {
          answer:
            "New machines were invented during the Industrial Revolution.",
          is_true_option: false,
        },
        {
          answer: "The Industrial Revolution created more jobs.",
          is_true_option: false,
        },
        {
          answer: "Factories replaced small workshops.",
          is_true_option: false,
        },
      ],
    },
    {
      id: 9,
      questions:
        "Read the following passage:\n\nTrees are vital to the environment as they provide oxygen, absorb carbon dioxide, and help regulate the climate. Deforestation is causing major environmental damage worldwide.\n\nWhat is the main purpose of the passage?",
      answer_option: [
        { answer: "To explain the benefits of trees", is_true_option: false },
        {
          answer: "To highlight the environmental impact of deforestation",
          is_true_option: true,
        },
        {
          answer: "To discuss how trees produce oxygen",
          is_true_option: false,
        },
        {
          answer: "To describe the process of deforestation",
          is_true_option: false,
        },
      ],
    },
    {
      id: 10,
      questions:
        "Read the following passage:\n\nMany people are now opting for plant-based diets due to health and environmental concerns. Studies show that these diets can help reduce the risk of chronic diseases and minimize the carbon footprint associated with food production.\n\nWhat is the main idea of the passage?",
      answer_option: [
        {
          answer: "Plant-based diets are becoming more popular.",
          is_true_option: false,
        },
        {
          answer:
            "Plant-based diets are beneficial for health and the environment.",
          is_true_option: true,
        },
        {
          answer: "Plant-based diets reduce the risk of chronic diseases.",
          is_true_option: false,
        },
        {
          answer: "People choose plant-based diets for environmental reasons.",
          is_true_option: false,
        },
      ],
    },
    {
      id: 11,
      questions:
        "Read the following passage:\n\nRenewable energy sources like solar and wind power are becoming more prevalent. They offer a cleaner alternative to fossil fuels, which contribute to air pollution and climate change.\n\nWhat is the main purpose of the passage?",
      answer_option: [
        {
          answer: "To discuss the benefits of renewable energy sources",
          is_true_option: true,
        },
        {
          answer: "To describe the process of generating renewable energy",
          is_true_option: false,
        },
        {
          answer: "To compare fossil fuels and renewable energy",
          is_true_option: false,
        },
        {
          answer: "To explain how solar and wind power work",
          is_true_option: false,
        },
      ],
    },
    {
      id: 12,
      questions:
        "Read the following passage:\n\nPolar bears are well-adapted to life in the Arctic, but climate change is melting their sea ice habitat. As a result, they are finding it harder to hunt for food, leading to population declines.\n\nWhat is the main topic of the passage?",
      answer_option: [
        {
          answer: "The challenges polar bears face due to climate change",
          is_true_option: true,
        },
        {
          answer: "The adaptations of polar bears to the Arctic",
          is_true_option: false,
        },
        { answer: "The diet of polar bears", is_true_option: false },
        {
          answer: "The melting of sea ice in the Arctic",
          is_true_option: false,
        },
      ],
    },
  ],
};
