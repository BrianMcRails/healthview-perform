# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Risk.create(user_id: 1, risk_score_title: 'SCAI Bleeding', risk_score: 28)
PreCheck.create(user_id: 2, check_name: 'Pre cath imaging?', check_status: 0)
PreCheck.create(user_id: 2, check_name: 'Pregnancy?', check_status: 0)
