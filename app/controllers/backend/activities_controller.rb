class Backend::ActivitiesController < ApplicationController
  before_action :authenticate_admin!
  before_action :find_activity, only: [:update, :destroy]

  def index
    @activities = Activity.all
    respond_to do |format|
      format.json { render json: @activities.recent }
    end
  end

  def create
    @activity = Activity.new(activity_params)
    if @activity.save
      respond_to do |format|
        format.json { render json: { activity: @activity, msg: "New activity has been created successfully!" } }
      end
    else
      respond_to do |format|
        format.json { render json: { errors: @activity.errors.full_messages, status: 422 } }
      end
    end
  end

  def update
    if @activity.update(activity_params)
      respond_to do |format|
        format.json { render json: { msg: "Activity is updated successfully!" } } 
      end
    else
      respond_to do |format|
        format.json { render json: { errors: @activity.errors.full_messages, status: 422 } }
      end
    end
  end

  def destroy
    @activity.destroy
    
    respond_to do |format|
      format.json { render json: { msg: "Activity is destroyed successfully!" } }
    end
  end

  private
  def activity_params
    params.require(:activity).permit(:name, :registration_start, :registration_end, :description, :location) 
  end

  def find_activity
    @activity = Activity.find(params[:id])
  end

end
