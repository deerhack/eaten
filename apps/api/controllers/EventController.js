const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class EventController{
    static async index(req,res){
        try{
            const data = await prisma.event.findMany({select:{
                id:true,
                name:true,
                start_time:true,
                end_time:true,
            }})
            return res.status(200).json({success:true,data:data});
        }catch(error){
            console.log(error)
            return res.status(500).json({success:false,error:error})
        }
    }

    
    static async getIndividual(req,res){
        try {
            const data = await prisma.event.findUnique({where:{
                id:parseInt(req.params.id)
            },include:{participants:true}})
            return res.status(200).json({success:true,data:data})
        } catch (error) {
            console.log(error)
            return res.status(500).json({success:false,error:error})
        }
    }

    static async add (req,res){
        const data = res.locals.validated;
        try{
            const  created = await prisma.event.create({
                data:{
                    name:data.name,
                    start_time:data.start_time ||  new  Date(),
                    end_time:data.end_time,
                }
            })
            return res.status(200).json({success:true,data:created})
        }catch(error){
            console.log(error)
            return res.status(500).json({success:false,error:error})
        }

    }
    static async update(req, res) {
        const data = res.locals.validated;
        
        const eventId = parseInt(req.params.id); // assuming the id of the event to update is in the request parameter 'id'
        try {
          const updated = await prisma.event.update({
            where: { id: eventId },
            data: {
              name: data.name,
              start_time: data.start_time || new Date(),
              end_time: data.end_time,
            },
          });
          return res.status(200).json({ success: true, data: updated });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ success: false, error: error });
        }
      }
      
    static async destroy(req,res){
        try {
            const deleted = await prisma.event.delete({
                where:{
                    id:parseInt(req.params.id)
                }
            })
            return res.status(200).json({success:true,deleted:deleted})
        } catch (error) {
            console.log(error)
            return res.status(500).json({success:false,error:error})
        }

    }
    static async subscribe(req, res) {
        try {
          const eventId = parseInt(req.params.id)
          const userId = res.locals.validated.ID
      
          const event = await prisma.event.findUnique({ where: { id: eventId } })
      
          if (!event) {
            return res.status(404).json({success:false,error:"No such Event Found!"})
          }
      
          const participant = await prisma.participant.findUnique({
            where: { uuid: userId },
            include: { events: true },
          })
      
          const eventIds = participant.events.map((event) => event.id)
      
          if (eventIds.includes(eventId)) {
            return res.status(403).json({success:false,data:"Already registered for this event!"})
          }
      
          const updatedParticipant = await prisma.participant.update({
            where: { uuid: userId },
            data: { events: { connect: { id: eventId } } },
            include: { events: true },
          })
      
          return res.status(200).json({ success: true, data: updatedParticipant.uuid })
      
        } catch (error) {
          console.log(error)
          return res.status(500).json({ success: false, error: error })
        }
      }

    static async get_participant_data(req,res){
        const participant_id = req.params.id;
        const data = await prisma.participant.findUnique({
            where:
            {
                uuid:participant_id
            },
            select:{
                uuid:true,
                first_name:true,
                last_name:true,
                email:true,
                gender:true,
                team_name:true,
                events:true
            }
        })
        return res.status(200).json(data)
    }
}

module.exports = EventController