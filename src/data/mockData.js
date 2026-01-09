export const mockResources = [
  {
    id: '1',
    title: 'Data Structures and Algorithms Complete Notes',
    description: 'Comprehensive notes covering all topics including arrays, linked lists, trees, graphs, sorting, and searching algorithms with examples.',
    subject: 'Data Structures',
    semester: 3,
    type: 'Notes',
    college: 'MIT College of Engineering',
    department: 'Computer Science',
    uploadedBy: {
      id: '1',
      name: 'Priya Sharma',
      avatar: 'PS'
    },
    uploadedAt: '2025-01-05',
    downloads: 1245,
    rating: 4.8,
    reviews: 89,
    fileType: 'PDF',
    fileSize: '12.5 MB',
    tags: ['DSA', 'Algorithms', 'Programming'],
    isTrending: true,
    status: 'Approved',
    qualityBadges: ['Verified', 'Top Rated'],
    aiSummary: 'This comprehensive document covers fundamental data structures including arrays, linked lists, stacks, queues, trees, and graphs. It includes detailed explanations of sorting algorithms (bubble sort, quick sort, merge sort) and searching algorithms (binary search, linear search). Each concept is illustrated with code examples in C++ and Java, along with time complexity analysis. The document also covers advanced topics like dynamic programming and greedy algorithms with real-world applications.'
  },
  {
    id: '2',
    title: 'Database Management Systems PYQ 2024',
    description: 'Previous year question papers for DBMS with solutions. Includes all units and important topics.',
    subject: 'DBMS',
    semester: 4,
    type: 'PYQ',
    college: 'VIT University',
    department: 'Computer Science',
    uploadedBy: {
      id: '2',
      name: 'Rahul Verma',
      avatar: 'RV'
    },
    uploadedAt: '2025-01-03',
    downloads: 892,
    rating: 4.6,
    reviews: 56,
    fileType: 'PDF',
    fileSize: '5.2 MB',
    tags: ['DBMS', 'PYQ', 'SQL'],
    isTrending: true,
    status: 'Approved',
    qualityBadges: ['Verified'],
    aiSummary: 'This PYQ collection contains 5 years of Database Management Systems examination papers with detailed solutions. Topics covered include relational algebra, SQL queries, normalization (1NF to BCNF), transaction management, concurrency control, and indexing. Each solution includes step-by-step explanations and common mistakes to avoid. Special focus on practical SQL queries and database design problems frequently asked in university exams.'
  },
  {
    id: '3',
    title: 'Machine Learning Project - House Price Prediction',
    description: 'Complete ML project with dataset, code, and documentation. Implements linear regression and random forest models.',
    subject: 'Machine Learning',
    semester: 6,
    type: 'Project',
    college: 'IIT Delhi',
    department: 'Computer Science',
    uploadedBy: {
      id: '3',
      name: 'Anjali Gupta',
      avatar: 'AG'
    },
    uploadedAt: '2025-01-01',
    downloads: 2134,
    rating: 4.9,
    reviews: 145,
    fileType: 'ZIP',
    fileSize: '45.8 MB',
    tags: ['ML', 'Python', 'Project'],
    isTrending: true,
    status: 'Approved',
    qualityBadges: ['Verified', 'Top Rated', 'Faculty Recommended'],
    aiSummary: 'Complete machine learning project implementing house price prediction using multiple algorithms. Includes data preprocessing, exploratory data analysis, feature engineering, and model comparison between Linear Regression, Random Forest, and Gradient Boosting. The project achieves 87% accuracy on test data. Contains Jupyter notebooks, Python scripts, trained models, and comprehensive documentation. Dataset includes 10,000+ housing records with features like location, size, amenities, and neighborhood ratings.'
  },
  {
    id: '4',
    title: 'Operating Systems Lecture Notes - Process Management',
    description: 'Detailed notes on process management, scheduling algorithms, and synchronization.',
    subject: 'Operating Systems',
    semester: 5,
    type: 'Notes',
    college: 'NIT Trichy',
    department: 'Computer Science',
    uploadedBy: {
      id: '4',
      name: 'Vikram Singh',
      avatar: 'VS'
    },
    uploadedAt: '2024-12-28',
    downloads: 756,
    rating: 4.5,
    reviews: 42,
    fileType: 'PDF',
    fileSize: '8.3 MB',
    tags: ['OS', 'Processes', 'Scheduling'],
    status: 'Approved',
    qualityBadges: ['Verified']
  },
  {
    id: '5',
    title: 'Computer Networks Assignment Solutions',
    description: 'Solutions to all assignments covering OSI model, TCP/IP, routing algorithms, and network security.',
    subject: 'Computer Networks',
    semester: 5,
    type: 'Assignment',
    college: 'BITS Pilani',
    department: 'Computer Science',
    uploadedBy: {
      id: '5',
      name: 'Sneha Patel',
      avatar: 'SP'
    },
    uploadedAt: '2024-12-25',
    downloads: 634,
    rating: 4.7,
    reviews: 38,
    fileType: 'PDF',
    fileSize: '6.7 MB',
    tags: ['Networks', 'Assignments', 'TCP/IP'],
    status: 'Approved'
  },
  {
    id: '6',
    title: 'Artificial Intelligence Complete Study Material',
    description: 'Complete study material including search algorithms, knowledge representation, and neural networks.',
    subject: 'Artificial Intelligence',
    semester: 7,
    type: 'Book',
    college: 'MIT College of Engineering',
    department: 'Computer Science',
    uploadedBy: {
      id: '6',
      name: 'Arjun Mehta',
      avatar: 'AM'
    },
    uploadedAt: '2024-12-20',
    downloads: 1523,
    rating: 4.8,
    reviews: 98,
    fileType: 'PDF',
    fileSize: '28.4 MB',
    tags: ['AI', 'Neural Networks', 'Study Material'],
    isTrending: true,
    status: 'Approved',
    qualityBadges: ['Top Rated']
  },
  {
    id: '7',
    title: 'Web Development Project - E-Commerce Site',
    description: 'Full-stack e-commerce project using MERN stack with authentication, cart, and payment integration.',
    subject: 'Web Development',
    semester: 6,
    type: 'Project',
    college: 'VIT University',
    department: 'Computer Science',
    uploadedBy: {
      id: '7',
      name: 'Kavya Reddy',
      avatar: 'KR'
    },
    uploadedAt: '2024-12-18',
    downloads: 1876,
    rating: 4.9,
    reviews: 123,
    fileType: 'ZIP',
    fileSize: '52.1 MB',
    tags: ['MERN', 'Web Dev', 'Project'],
    status: 'Approved',
    qualityBadges: ['Verified', 'Top Rated']
  },
  {
    id: '8',
    title: 'Digital Electronics PYQ Collection 2020-2024',
    description: '5 years of previous year questions with detailed solutions for digital electronics.',
    subject: 'Digital Electronics',
    semester: 3,
    type: 'PYQ',
    college: 'Anna University',
    department: 'Electronics',
    uploadedBy: {
      id: '8',
      name: 'Rohan Kumar',
      avatar: 'RK'
    },
    uploadedAt: '2024-12-15',
    downloads: 943,
    rating: 4.6,
    reviews: 67,
    fileType: 'PDF',
    fileSize: '9.8 MB',
    tags: ['Electronics', 'PYQ', 'Digital'],
    status: 'Approved'
  },
  {
    id: '9',
    title: 'Software Engineering Design Patterns',
    description: 'Comprehensive guide to software design patterns with real-world examples.',
    subject: 'Software Engineering',
    semester: 6,
    type: 'Notes',
    college: 'IIT Delhi',
    department: 'Computer Science',
    uploadedBy: {
      id: '9',
      name: 'Aditya Verma',
      avatar: 'AV'
    },
    uploadedAt: '2025-01-06',
    downloads: 234,
    rating: 0,
    reviews: 0,
    fileType: 'PDF',
    fileSize: '15.2 MB',
    tags: ['Software Engineering', 'Design Patterns'],
    status: 'Pending',
    rejectionReason: ''
  },
  {
    id: '10',
    title: 'Cloud Computing Azure Guide',
    description: 'Beginner guide to Microsoft Azure cloud services.',
    subject: 'Cloud Computing',
    semester: 7,
    type: 'Notes',
    college: 'BITS Pilani',
    department: 'Computer Science',
    uploadedBy: {
      id: '10',
      name: 'Neha Kapoor',
      avatar: 'NK'
    },
    uploadedAt: '2025-01-05',
    downloads: 0,
    rating: 0,
    reviews: 0,
    fileType: 'PDF',
    fileSize: '8.9 MB',
    tags: ['Cloud', 'Azure'],
    status: 'Rejected',
    rejectionReason: 'The content appears to be directly copied from official Microsoft documentation without proper attribution. Please ensure all resources are original or properly cited.'
  }
];

export const mockComments = {
  '1': [
    {
      id: '1',
      userId: '2',
      userName: 'Rahul Kumar',
      userAvatar: 'RK',
      content: 'Excellent notes! Really helped me understand trees and graphs better.',
      rating: 5,
      date: '2025-01-04'
    },
    {
      id: '2',
      userId: '3',
      userName: 'Sneha Patel',
      userAvatar: 'SP',
      content: 'Very comprehensive coverage of all topics. The examples are particularly helpful.',
      rating: 5,
      date: '2025-01-03'
    }
  ],
  '2': [
    {
      id: '3',
      userId: '1',
      userName: 'Priya Sharma',
      userAvatar: 'PS',
      content: 'Great collection of PYQs. Solutions are well explained.',
      rating: 4,
      date: '2025-01-02'
    }
  ]
};

export const topContributors = [
  { id: '1', name: 'Priya Sharma', uploads: 45, college: 'MIT COE', avatar: 'PS', totalDownloads: 12450, rank: 1 },
  { id: '2', name: 'Rahul Verma', uploads: 38, college: 'VIT University', avatar: 'RV', totalDownloads: 9820, rank: 2 },
  { id: '3', name: 'Anjali Gupta', uploads: 32, college: 'IIT Delhi', avatar: 'AG', totalDownloads: 8940, rank: 3 },
  { id: '4', name: 'Vikram Singh', uploads: 28, college: 'NIT Trichy', avatar: 'VS', totalDownloads: 7560, rank: 4 },
  { id: '5', name: 'Sneha Patel', uploads: 24, college: 'BITS Pilani', avatar: 'SP', totalDownloads: 6340, rank: 5 },
  { id: '6', name: 'Arjun Mehta', uploads: 22, college: 'MIT COE', avatar: 'AM', totalDownloads: 5890, rank: 6 },
  { id: '7', name: 'Kavya Reddy', uploads: 20, college: 'VIT University', avatar: 'KR', totalDownloads: 5120, rank: 7 },
  { id: '8', name: 'Rohan Kumar', uploads: 18, college: 'Anna University', avatar: 'RK', totalDownloads: 4780, rank: 8 },
];

export const mockColleges = [
  { id: '1', name: 'MIT College of Engineering', location: 'Pune, Maharashtra', resourceCount: 1234, studentCount: 450, logo: 'MC' },
  { id: '2', name: 'VIT University', location: 'Vellore, Tamil Nadu', resourceCount: 2156, studentCount: 680, logo: 'VU' },
  { id: '3', name: 'IIT Delhi', location: 'New Delhi', resourceCount: 3421, studentCount: 890, logo: 'ID' },
  { id: '4', name: 'NIT Trichy', location: 'Tiruchirappalli, Tamil Nadu', resourceCount: 1876, studentCount: 520, logo: 'NT' },
  { id: '5', name: 'BITS Pilani', location: 'Pilani, Rajasthan', resourceCount: 2567, studentCount: 730, logo: 'BP' },
  { id: '6', name: 'Anna University', location: 'Chennai, Tamil Nadu', resourceCount: 1543, studentCount: 610, logo: 'AU' },
];

export const testimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    college: 'MIT College of Engineering',
    avatar: 'PS',
    content: 'This platform has been a game-changer for my studies. I found all the resources I needed for my exams in one place!',
    rating: 5
  },
  {
    id: '2',
    name: 'Rahul Verma',
    college: 'VIT University',
    avatar: 'RV',
    content: 'Amazing collection of PYQs and notes. The quality of resources is outstanding and really helped me score better.',
    rating: 5
  },
  {
    id: '3',
    name: 'Anjali Gupta',
    college: 'IIT Delhi',
    avatar: 'AG',
    content: 'I love how easy it is to find and share resources. The community here is very supportive and helpful!',
    rating: 5
  }
];