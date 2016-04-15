class Risk < ActiveRecord::Base
	validates :risk_score_title, presence: true
	validates :risk_score, presence: true
	belongs_to :user
	
	def as_json(options={})
		super(methods: [:name, :gravatar, :risk_percent])
	end
	
	def name
		user.display_name
	end

   	def gravatar
		user.gravatar
	end

	def risk_percent
		risk_score.to_s + '%'		
	end

	def self.stream_for(current_user_id)
		joins(:user)
		.where(["users.id = :current_user_id or users.id in (
			select user_id from risks
			where user_id = :current_user_id
			)", {current_user_id: current_user_id }])
		.all
		.order(updated_at: :desc)
	end


end
