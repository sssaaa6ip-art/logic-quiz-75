
import { Question, QuestionType } from '../types';

export const QUESTIONS: Question[] = [
  // 50 MCQ Questions
  ...Array.from({ length: 50 }, (_, i) => {
    const mcqs = [
      { en: "Analog signals are characterized as being:", ar: "تتميز الإشارات التناظرية بأنها:", optionsEn: ["Continuous", "Discrete", "Fixed", "Binary"], optionsAr: ["مستمرة", "منفصلة", "ثابتة", "ثنائية"], correct: 0 },
      { en: "Digital signals are represented by:", ar: "تمثل الإشارات الرقمية بواسطة:", optionsEn: ["Binary numbers", "Infinite values", "Varying waves", "Circles"], optionsAr: ["أرقام ثنائية", "قيم لا نهائية", "موجات متغيرة", "دوائر"], correct: 0 },
      { en: "The base of the binary number system is:", ar: "أساس نظام الأرقام الثنائي هو:", optionsEn: ["10", "8", "2", "16"], optionsAr: ["10", "8", "2", "16"], correct: 2 },
      { en: "A single binary digit (0 or 1) is called a:", ar: "الرقم الثنائي الواحد (0 أو 1) يسمى:", optionsEn: ["Byte", "Bit", "Nibble", "Word"], optionsAr: ["بايت", "بت", "نيبل", "كلمة"], correct: 1 },
      { en: "A group of 4 bits is called a:", ar: "مجموعة من 4 بت تسمى:", optionsEn: ["Byte", "Bit", "Nibble", "Word"], optionsAr: ["بايت", "بت", "نيبل", "كلمة"], correct: 2 },
      { en: "A group of 8 bits is called a:", ar: "مجموعة من 8 بت تسمى:", optionsEn: ["Byte", "Bit", "Nibble", "Word"], optionsAr: ["بايت", "بت", "نيبل", "كلمة"], correct: 0 },
      { en: "LSB stands for:", ar: "يرمز LSB إلى:", optionsEn: ["Least Significant Bit", "Long Side Bit", "Lower Scale Bit", "Last System Bit"], optionsAr: ["البت الأقل أهمية", "البت الجانبي الطويل", "البت ذو المقياس الأدنى", "بت النظام الأخير"], correct: 0 },
      { en: "MSB stands for:", ar: "يرمز MSB إلى:", optionsEn: ["Most Significant Bit", "Main System Bit", "Middle Set Bit", "Master Standard Bit"], optionsAr: ["البت الأكثر أهمية", "بت النظام الرئيسي", "البت الأوسط", "البت القياسي الرئيسي"], correct: 0 },
      { en: "The decimal number 9 is equal to binary:", ar: "الرقم العشري 9 يساوي بالثنائي:", optionsEn: ["1000", "1001", "1010", "1111"], optionsAr: ["1000", "1001", "1010", "1111"], correct: 1 },
      { en: "The binary number 1010 in decimal is:", ar: "الرقم الثنائي 1010 بالعشري هو:", optionsEn: ["10", "12", "8", "5"], optionsAr: ["10", "12", "8", "5"], correct: 0 },
      { en: "Base 16 is known as:", ar: "الأساس 16 يعرف باسم:", optionsEn: ["Binary", "Octal", "Decimal", "Hexadecimal"], optionsAr: ["ثنائي", "ثماني", "عشري", "سداسي عشر"], correct: 3 },
      { en: "The hexadecimal digit 'A' corresponds to decimal:", ar: "الرقم السداسي عشر 'A' يقابل بالعشري:", optionsEn: ["10", "11", "12", "15"], optionsAr: ["10", "11", "12", "15"], correct: 0 },
      { en: "The hexadecimal digit 'F' corresponds to decimal:", ar: "الرقم السداسي عشر 'F' يقابل بالعشري:", optionsEn: ["10", "14", "15", "16"], optionsAr: ["10", "14", "15", "16"], correct: 2 },
      { en: "Which logic gate is known as an 'Inverter'?", ar: "أي بوابة منطقية تعرف باسم 'العاكس'؟", optionsEn: ["AND", "OR", "NOT", "NAND"], optionsAr: ["AND", "OR", "NOT", "NAND"], correct: 2 },
      { en: "An AND gate output is 1 only when:", ar: "مخرج بوابة AND هو 1 فقط عندما:", optionsEn: ["Both inputs are 1", "Any input is 1", "Both inputs are 0", "Inputs are different"], optionsAr: ["كلا المدخلين 1", "أي مدخل 1", "كلا المدخلين 0", "المدخلات مختلفة"], correct: 0 },
      { en: "An OR gate output is 0 only when:", ar: "مخرج بوابة OR هو 0 فقط عندما:", optionsEn: ["Both inputs are 1", "Any input is 1", "Both inputs are 0", "Inputs are different"], optionsAr: ["كلا المدخلين 1", "أي مدخل 1", "كلا المدخلين 0", "المدخلات مختلفة"], correct: 2 },
      { en: "The XOR gate output is 1 when:", ar: "مخرج بوابة XOR هو 1 عندما:", optionsEn: ["Inputs are same", "Inputs are different", "Inputs are 0", "Inputs are 1"], optionsAr: ["المدخلات متشابهة", "المدخلات مختلفة", "المدخلات 0", "المدخلات 1"], correct: 1 },
      { en: "NAND is a combination of:", ar: "بوابة NAND هي مزيج من:", optionsEn: ["NOT and AND", "NOT and OR", "AND and OR", "OR and XOR"], optionsAr: ["NOT و AND", "NOT و OR", "AND و OR", "OR و XOR"], correct: 0 },
      { en: "The binary sum 1 + 1 is:", ar: "حاصل الجمع الثنائي 1 + 1 هو:", optionsEn: ["1", "0 with carry 1", "2", "11"], optionsAr: ["1", "0 مع حمل 1", "2", "11"], correct: 1 },
      { en: "1's complement of 1011 is:", ar: "متمم الآحاد لـ 1011 هو:", optionsEn: ["0100", "1100", "0101", "0000"], optionsAr: ["0100", "1100", "0101", "0000"], correct: 0 },
      { en: "2's complement is 1's complement plus:", ar: "متمم الثنائيات هو متمم الآحاد زائد:", optionsEn: ["0", "1", "10", "2"], optionsAr: ["0", "1", "10", "2"], correct: 1 },
      { en: "BCD stands for:", ar: "يرمز BCD إلى:", optionsEn: ["Binary Coded Decimal", "Basic Count Data", "Binary Clear Device", "Bit Count Decimal"], optionsAr: ["Binary Coded Decimal", "Basic Count Data", "Binary Clear Device", "Bit Count Decimal"], correct: 0 },
      { en: "Gray code is known as:", ar: "يعرف كود غراي بأنه:", optionsEn: ["Weighted code", "Reflected code", "Decimal code", "Alpha code"], optionsAr: ["كود موزون", "كود انعكاسي", "كود عشري", "كود ألفا"], correct: 1 },
      { en: "Boolean law A + 0 equals:", ar: "قانون بول A + 0 يساوي:", optionsEn: ["0", "1", "A", "A'"], optionsAr: ["0", "1", "A", "A'"], correct: 2 },
      { en: "Boolean law A + 1 equals:", ar: "قانون بول A + 1 يساوي:", optionsEn: ["0", "1", "A", "A'"], optionsAr: ["0", "1", "A", "A'"], correct: 1 },
      { en: "Boolean law A . 0 equals:", ar: "قانون بول A . 0 يساوي:", optionsEn: ["0", "1", "A", "A'"], optionsAr: ["0", "1", "A", "A'"], correct: 0 },
      { en: "Boolean law A . 1 equals:", ar: "قانون بول A . 1 يساوي:", optionsEn: ["0", "1", "A", "A'"], optionsAr: ["0", "1", "A", "A'"], correct: 2 },
      { en: "Boolean law A + A equals:", ar: "قانون بول A + A يساوي:", optionsEn: ["A", "1", "0", "2A"], optionsAr: ["A", "1", "0", "2A"], correct: 0 },
      { en: "Boolean law A . A equals:", ar: "قانون بول A . A يساوي:", optionsEn: ["A", "1", "0", "A squared"], optionsAr: ["A", "1", "0", "A تربيع"], correct: 0 },
      { en: "Commutative law states A + B =", ar: "قانون التبديل ينص على أن A + B =", optionsEn: ["A . B", "B + A", "1", "0"], optionsAr: ["A . B", "B + A", "1", "0"], correct: 1 },
      { en: "DeMorgan's First Law (A.B)' =", ar: "قانون ديمورغان الأول (A.B)' =", optionsEn: ["A' + B'", "A' . B'", "A + B", "A . B"], optionsAr: ["A' + B'", "A' . B'", "A + B", "A . B"], correct: 0 },
      { en: "DeMorgan's Second Law (A+B)' =", ar: "قانون ديمورغان الثاني (A+B)' =", optionsEn: ["A' + B'", "A' . B'", "A + B", "A . B"], optionsAr: ["A' + B'", "A' . B'", "A + B", "A . B"], correct: 1 },
      { en: "SOP stands for:", ar: "يرمز SOP إلى:", optionsEn: ["Sum of Products", "Single of Points", "Standard of Parts", "Simple of Power"], optionsAr: ["Sum of Products", "Single of Points", "Standard of Parts", "Simple of Power"], correct: 0 },
      { en: "POS stands for:", ar: "يرمز POS إلى:", optionsEn: ["Product of Sums", "Point of Sale", "Power of System", "Part of Standard"], optionsAr: ["Product of Sums", "Point of Sale", "Power of System", "Part of Standard"], correct: 0 },
      { en: "In SOP, a 'Minterm' equals 1 for the output when:", ar: "في SOP، الـ Minterm يساوي 1 للمخرج عندما:", optionsEn: ["The condition is met", "All inputs are 0", "Any input is 0", "None of above"], optionsAr: ["يتحقق الشرط", "جميع المدخلات 0", "أي مدخل 0", "لا شيء مما سبق"], correct: 0 },
      { en: "The method used for simplifying boolean functions graphically is:", ar: "الطريقة المستخدمة لتبسيط الدوال البولية بيانياً هي:", optionsEn: ["Truth table", "K-Map", "BCD", "Logic gates"], optionsAr: ["جدول الحقيقة", "خريطة كارنو", "BCD", "البوابات المنطقية"], correct: 1 },
      { en: "Number of cells in a 3-variable K-Map is:", ar: "عدد الخلايا في خريطة كارنو لثلاثة متغيرات هو:", optionsEn: ["4", "8", "16", "32"], optionsAr: ["4", "8", "16", "32"], correct: 1 },
      { en: "Number of cells in a 4-variable K-Map is:", ar: "عدد الخلايا في خريطة كارنو لأربعة متغيرات هو:", optionsEn: ["4", "8", "16", "32"], optionsAr: ["4", "8", "16", "32"], correct: 2 },
      { en: "Gray code sequence for K-map columns is:", ar: "تسلسل كود غراي لأعمدة خريطة كارنو هو:", optionsEn: ["00, 01, 10, 11", "00, 01, 11, 10", "0, 1", "00, 11"], optionsAr: ["00, 01, 10, 11", "00, 01, 11, 10", "0, 1", "00, 11"], correct: 1 },
      { en: "A 'Byte' represents:", ar: "الـ 'بايت' يمثل:", optionsEn: ["4 bits", "8 bits", "16 bits", "2 bits"], optionsAr: ["4 بت", "8 بت", "16 بت", "2 بت"], correct: 1 },
      { en: "Digital systems process information in:", ar: "تعالج الأنظمة الرقمية المعلومات في:", optionsEn: ["Decimal", "Binary", "Analog", "Continuous"], optionsAr: ["عشري", "ثنائي", "تناظري", "مستمر"], correct: 1 },
      { en: "The logic expression for an AND gate is:", ar: "التعبير المنطقي لبوابة AND هو:", optionsEn: ["A+B", "A.B", "A'", "A XOR B"], optionsAr: ["A+B", "A.B", "A'", "A XOR B"], correct: 1 },
      { en: "The logic expression for an OR gate is:", ar: "التعبير المنطقي لبوابة OR هو:", optionsEn: ["A+B", "A.B", "A'", "A XOR B"], optionsAr: ["A+B", "A.B", "A'", "A XOR B"], correct: 0 },
      { en: "Binary 1100 in decimal is:", ar: "الثنائي 1100 بالعشري هو:", optionsEn: ["10", "12", "14", "8"], optionsAr: ["10", "12", "14", "8"], correct: 1 },
      { en: "Which of these is a 'Universal Gate'?", ar: "أي من هذه هي 'بوابة شاملة'؟", optionsEn: ["AND", "OR", "NAND", "NOT"], optionsAr: ["AND", "OR", "NAND", "NOT"], correct: 2 },
      { en: "XNOR gate is the complement of:", ar: "بوابة XNOR هي متمم بوابة:", optionsEn: ["XOR", "AND", "OR", "NAND"], optionsAr: ["XOR", "AND", "OR", "NAND"], correct: 0 },
      { en: "The base of Octal number system is:", ar: "أساس نظام الأرقام الثماني هو:", optionsEn: ["2", "8", "10", "16"], optionsAr: ["2", "8", "10", "16"], correct: 1 },
      { en: "How many bits are in a BCD group for one decimal digit?", ar: "كم عدد البتات في مجموعة BCD لرقم عشري واحد؟", optionsEn: ["2", "3", "4", "8"], optionsAr: ["2", "3", "4", "8"], correct: 2 },
      { en: "Simplification reduces:", ar: "التبسيط يقلل من:", optionsEn: ["Speed", "Cost and Gates", "Precision", "Memory"], optionsAr: ["السرعة", "التكلفة والبوابات", "الدقة", "الذاكرة"], correct: 1 },
      { en: "Who developed Boolean Algebra?", ar: "من طور جبر بول؟", optionsEn: ["Isaac Newton", "George Boole", "Alan Turing", "John von Neumann"], optionsAr: ["إسحاق نيوتن", "جورج بول", "آلان تورينج", "جون فون نيومان"], correct: 1 }
    ];
    const data = mcqs[i % mcqs.length];
    return {
      id: i + 1,
      type: QuestionType.MCQ,
      text: { en: data.en, ar: data.ar },
      options: { en: data.optionsEn, ar: data.optionsAr },
      correctAnswer: data.correct
    };
  }),

  // 25 True/False Questions
  ...Array.from({ length: 25 }, (_, i) => {
    const tfs = [
      { en: "Analog signals are continuous in value and time.", ar: "الإشارات التناظرية مستمرة في القيمة والوقت.", correct: 'true' },
      { en: "Digital signals are represented by only two values (0 and 1).", ar: "تمثل الإشارات الرقمية بقيمتين فقط (0 و 1).", correct: 'true' },
      { en: "A nibble consists of 8 bits.", ar: "النيبل يتكون من 8 بت.", correct: 'false' },
      { en: "NOT gate output is always the same as the input.", ar: "مخرج بوابة NOT يكون دائماً نفس المدخل.", correct: 'false' },
      { en: "AND gate output is 1 if at least one input is 1.", ar: "مخرج بوابة AND هو 1 إذا كان مدخل واحد على الأقل 1.", correct: 'false' },
      { en: "OR gate performs logical addition.", ar: "تقوم بوابة OR بعملية الجمع المنطقي.", correct: 'true' },
      { en: "Binary multiplication follows 1 x 1 = 1.", ar: "الضرب الثنائي يتبع قاعدة 1 × 1 = 1.", correct: 'true' },
      { en: "1's complement is found by inverting all bits.", ar: "يتم إيجاد متمم الآحاد بعكس جميع البتات.", correct: 'true' },
      { en: "SOP stands for Sum of Products.", ar: "SOP تعني مجموع حواصل الضرب.", correct: 'true' },
      { en: "POS stands for Product of Sums.", ar: "POS تعني حاصل ضرب المجاميع.", correct: 'true' },
      { en: "A 4-variable K-Map has 16 cells.", ar: "خريطة كارنو لأربعة متغيرات تحتوي على 16 خلية.", correct: 'true' },
      { en: "The base of hexadecimal is 10.", ar: "أساس النظام السداسي عشر هو 10.", correct: 'false' },
      { en: "NAND gate output is 0 only when both inputs are 1.", ar: "مخرج بوابة NAND هو 0 فقط عندما يكون كلا المدخلين 1.", correct: 'true' },
      { en: "Gray code is a weighted number system.", ar: "كود غراي هو نظام أرقام موزون.", correct: 'false' },
      { en: "In Boolean algebra, A + A' = 1.", ar: "في جبر بول، A + A' = 1.", correct: 'true' },
      { en: "DeMorgan's Theorem says (A+B)' = A'.B'.", ar: "تنص نظرية ديمورغان على أن (A+B)' = A'.B'.", correct: 'true' },
      { en: "BCD stands for Binary Coded Decimal.", ar: "BCD تعني Binary Coded Decimal.", correct: 'true' },
      { en: "XOR output is 1 when inputs are identical.", ar: "مخرج بوابة XOR هو 1 عندما تكون المدخلات متطابقة.", correct: 'false' },
      { en: "Identity law states A + 0 = A.", ar: "قانون الهوية ينص على أن A + 0 = A.", correct: 'true' },
      { en: "Double negation of A gives A.", ar: "النفي المزدوج لـ A يعطي A.", correct: 'true' },
      { en: "An Octal number system has digits from 0 to 9.", ar: "نظام الأرقام الثماني يحتوي على أرقام من 0 إلى 9.", correct: 'false' },
      { en: "Each hexadecimal digit represents 4 bits.", ar: "كل رقم سداسي عشر يمثل 4 بت.", correct: 'true' },
      { en: "MSB is the rightmost bit.", ar: "MSB هو البت الذي في أقصى اليمين.", correct: 'false' },
      { en: "Logic gates are the building blocks of digital circuits.", ar: "البوابات المنطقية هي اللبنات الأساسية للدوائر الرقمية.", correct: 'true' },
      { en: "1 + 0 in binary addition equals 1.", ar: "1 + 0 في الجمع الثنائي يساوي 1.", correct: 'true' }
    ];
    const data = tfs[i % tfs.length];
    return {
      id: 50 + i + 1,
      type: QuestionType.TRUE_FALSE,
      text: { en: data.en, ar: data.ar },
      correctAnswer: data.correct
    };
  })
];
