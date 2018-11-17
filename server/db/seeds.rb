# run with rake db:reset db:seed

question1 = Question.create(question: 'How do you manage your books?')
    first_options = Answer.create([
        {option: 'Online accounting software', score: 15, question: question1}, 
        {option: 'Desktop accounting software', score: 10, question: question1}, 
        {option: 'Spreadsheets (love them formulas!', score: 5, question: question1}, 
        {option:  'Books? You mean like Harry Potter?', score: 0, question: question1}])
    
    question2 = Question.create(question: 'Who manages your business finances?')
    second_options = Answer.create([
        {option: 'An external finance person', score: 15, question: question2},
        {option: 'Someone in-house', score: 10, question: question2},
        {option: 'The business owner', score: 5, question: question2},
        {option: 'Management schmanagement', score: 0, question: question2}
    ])
    
    question3 = Question.create(question: 'When do you ask for payment?')
    third_options = Answer.create([
        {option: 'Immediately', score: 15, question: question3},
        {option: 'Within a couple of weeks', score: 10, question: question3},
        {option: 'Within a month', score: 5, question: question3},
        {option: '"Oh, that reminds me!"', score: 0, question: question3}
    ])
    
    question4 = Question.create(question: 'What are your credit terms?')
    fourth_options = Answer.create([
        {option: 'I don’t offer credit', score: 15, question: question4},
        {option: '1-30 days', score: 10, question: question4},
        {option: 'More than 30 days', score: 5, question: question4},
        {option: 'Hopefully they’ll pay me sometime', score: 0, question: question4}
    ])
    
    question5 = Question.create(question: 'What do you do when payment is overdue?')
    fifth_options = Answer.create([
        {option: 'Hit the phones every day until I get paid', score: 15, question: question5},
        {option: 'Send an occasional gentle reminder', score: 10, question: question5},
        {option: 'Wait and hope for the best', score: 5, question: question5},
        {option: 'Sign off my emails to them “regards” rather than “kind regards”. That’ll show ‘em.', score: 0, question: question5}
    ])
    
    question6 = Question.create(question: 'What do you do if someone consistently pays late?')
    sixth_options = Answer.create([
        {option: 'Charge them more', score: 15, question: question6},
        {option: 'Re-negotiate payment terms', score: 10, question: question6},
        {option: 'End our relationship with them', score: 5, question: question6},
        {option: 'Grumble under my breath and hope they’ll change their ways', score: 0, question: question6}
    ])
    
    question7 = Question.create(question: 'How do you receive payment?')
    seventh_options = Answer.create([
        {option: '"Cash, credit card or bank transfer"', score: 15, question: question7},
        {option: 'Cash only', score: 10, question: question7},
        {option: 'Cheque', score: 5, question: question7},
        {option: 'Camels', score: 0, question: question7}
    ])
    
    question8 = Question.create(question: 'How do you record your expenses?')
    eigth_options = Answer.create([
        {option: 'With an app (like ReceiptBank or Expensify)', score: 15, question: question8},
        {option: 'In a spreadsheet', score: 10, question: question8},
        {option: 'In a ledger', score: 5, question: question8},
        {option: 'By putting all my receipts in a shoebox', score: 0, question: question8}
    ])
    
    question9 = Question.create(question: 'What do you do with the profits?')
    ninth_options = Answer.create([
        {option: 'Set aside a portion of every paid invoice', score: 15, question: question9},
        {option: 'Reinvest every penny we receive back into the business', score: 10, question: question9},
        {option: 'Save some cash, but only from the bigger invoices', score: 5, question: question9},
        {option: 'Buy something cool', score: 0, question: question9}
    ])
    
    question10 = Question.create(question: 'How do you forecast your cashflow?')
    tenth_options = Answer.create([
        {option: 'We use a cash flow forecasting tool (like Float!)', score: 15, question: question10},
        {option: 'Our accountant does it', score: 10, question: question10},
        {option: 'Manually using spreadsheets', score: 5, question: question10},
        {option: 'What is this “forecast” of which you speak?', score: 0, question: question10}
    ])
    
