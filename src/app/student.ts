export interface studentDetail{
    name: {
        type: String
        
    },
    email: {
        type: String
    },
    mob: {
        type: String
    },
    education: {
        school: {
            name: {
                type: String
            },
            board: {
                type: String
                
            },
            batch: {
                type: String
                
            },
            aggregate: {
                type: String
                
            }
        },
        puc: {
            name: {
                type: String
                
            },
            board: {
                type: String
                
            },
            batch: {
                type: String
                
            },
            aggregate: {
                type: String
                
            }
        },
        college: {
            name: {
                type: String
                
            },
            board: {
                type: String
                
            },
            batch: {
                type: String
                
            },
            aggregate: {
                type: String
                
            }
        }
    }
}