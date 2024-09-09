interface Mapel {
    name: string
}

interface Materi {
    name: string,
    author: string
    lesson: string
}

interface DataMateri {
    data: {
        [key: string] : Materi[]
    }
}

interface MenuItem {
    title: string;
    value: number | string;
    children: ReactNode;
  }
  
  interface DataPayMenu {
    data: MenuItem[];
  }

  interface DataCat {
    name: string
    price: number
    stock: number
  }
  interface KatCan {
    name: string
    data: DataCat[]
  }
interface CatCanteen {
    data: KatCan[]
}
interface DataCanteen2 {
  data: KatCan2[]
}
interface KatCan2 {
  name: string
  data: DataCat2[]
}
interface DataCat2 {
  name: string
  price: number
  stock: number
  rating: number
  shop_name: string
  reviewers: number
}
interface DataVocher {
  data: Voucher[],
}
interface Voucher {
  id: number
  name: string
  category: "discount" | "cashback"
  type: "percent" | "slice"
  amount: number
  description: string 
  stock: number,
  expired: number | string
}

interface QuizExam {
  id: number
  imageUrl?: string
  questions: string
  answer_option: {
    answer: string,
    is_true_option: boolean
  }[]
  explanation_for_true_answers?: string
}

