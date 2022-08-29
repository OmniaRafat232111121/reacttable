import {format} from 'date-fns'

export const COLUMNS=[
   {
    Header:'Id',
    Footer:'Id',
    accessor:'id'
   } ,
   {
    Header:'FirstName',
    Footer:'FirstName',
    accessor:'first_name'
   },
   {
    Header:'LastName',
    Footer:'LastName',
    accessor:'last_name'
   },
   {
    Header:'Date of Birth',
    Footer:'Date of Birth',
    accessor:'date_of_birth',
    Cell:({value})=>{return format(value,'dd/MM/YYY')}
   }
   ,
   {
    Header:'Country',
    Footer:'Country',
    accessor:'country'
   },
   {
    Header:'Phone',
    Footer:'Phone',
    accessor:'phone'
   }
]
export const GROUPED_COLUMNS=[
     {
        Header:'Id',
        Footer:'Id',
        accessor:'id'
     },
     {
    Header:'Name',
    Footer:'Name',
    columns:[
        {
            Header:'FirstName',
            Footer:'FirstName',
            accessor:'first_name'
           },
           {
            Header:'LastName',
            Footer:'LastName',
            accessor:'last_name'
           }
    ]

     },

     {
        Header:'info',
        Footer:'info',
        columns:[
            {
                Header:'Date of Birth',
                Footer:'Date of Birth',
                accessor:'date_of_birth'
               }
               ,
               {
                Header:'Country',
                Footer:'Country',
                accessor:'country'
               },
               {
                Header:'Phone',
                Footer:'Phone',
                accessor:'phone'
               }

        ]

     }
]