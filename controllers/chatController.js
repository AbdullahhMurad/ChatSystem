const { Op } = require('sequelize');
const { sequelize } = require('../models');
const models = require('../models');
const User = models.User;
const Chat = models.Chat;
const ChatUser = models.ChatUser;
const Message = models.Message;
 
exports.index = async (req, res) => {
  const user = await User.findOne({
    where: { id: req.user.id },
    include: [
      {
        model: Chat,
        include: [
          { model: User, where: { [Op.not]: { id: req.user.id } } },
          { model: Message, limit: 20, order: [['id', 'DESC']] },
        ],
      },
    ],
  });
 
  return res.json(user.Chats);
};
 
exports.create = async (req, res) => {
  const { partnerId } = req.body;
  const transaction = await sequelize.transaction();
 
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      include: [
        {
          model: Chat,
          where: { type: 'dual' },
          include: [
            {
              model: ChatUser,
              where: { userId: partnerId },
            },
          ],
        },
      ],
    });
 
    if (user && user.Chats.length > 0) {
      return res.status(403).json({
        status: 'Error',
        message: 'A Chat with this user already exists!',
      });
    }
 
    const chat = await Chat.create(
      { type: 'dual' },
      { transaction: transaction }
    );
 
    await ChatUser.bulkCreate(
      [
        {
          chatId: chat.id,
          userId: req.user.id,
        },
        {
          chatId: chat.id,
          userId: partnerId,
        },
      ],
      { transaction: transaction }
    );
    await transaction.commit();
 
    const chatNew = await Chat.findOne({
      where: { id: chat.id },
      include: [
        { model: User, where: { [Op.not]: { id: req.user.id } } },
        { model: Message },
      ],
    });
 
    return res.json(chatNew);
  } catch (error) {
    await transaction.rollback();
    return res.status(500).json({ status: 'Error', message: error.message });
  }
};
 
exports.messages = async (req, res) => {
    
    const limit = 10;
    const page = req.query.page || 1;
    const offset = page > 1 ? page * limit : 0;

    const messages = await Message.findAndCountAll({

        where: {
            chatId: req.query.id
        },

        limit,
        offset
    })

    const totalPages = Math.ceil(messages.count / limit);

    if ( page > totalPages) 
        return res.json({ data: {messages: [] } });

    const result = {
        
        // fi mshkle 3nd 2l messages.row

        messages: messages.rows,
        pagination: {
            page,
            totalPages
        }
    }

    return res.json(result);

}

// Function to delete a chat

exports.deleteChat = async (req, res) => {

    try {

      await Chat.destroy({
        where: {
          id: req.params.id
        }
      })

      return res.json({ status: "Success", message: "Chat has been successfully deleted"});      
      
    } catch (error) {
          return res.status(500).json({ status: "Error", message: error.message});
    }



}












// const { sequelize } = require("sequelize");
// const models = require("../models");
// const User = models.User;
// const Chat = models.Chat;
// const ChatUser = models.ChatUser;
// const Message = models.Message;
// const { Op } = require("sequelize");

// exports.index = async (req, res) => {

//     const user = await User.findOne({

//         where: {
//             id: req.user.id
//         },
//         include : [

//             {
//                 model: Chat,
//                 include: [
//                     {
//                         model: User,
//                         where: {
//                             [Op.not]: {
//                                 id: req.user.id
//                             }
//                         }
//                     },
//                     {   
//                         model: Message,
//                         limit: 20,
//                         order: [["id", "DESC"]]
//                     }
//                 ]
//             }



//         ]


//     })

//         return res.send(user.Chats)
// }

// // Function that will create a new chat between two users

// exports.create = async (req, res) => {

//     const { partnerId } = req.body;

//     const transaction = await sequelize.transaction();

//     try {
        
//         const user = await User.findOne({
//             where: {
//                 id: req.user.id
//             },
//             include: [
//                 {
//                     model: Chat,
//                     where: {
//                         type: "dual"
//                     },
//                     include: [
//                         {
//                             model: ChatUser,
//                             where: {
//                                 userId: partnerId
//                             }
//                         }
//                     ]
//                 }
//             ]
//         })

//         if (user && user.Chats.length > 0 ) 
//             return res.status(403).json({status: "Error", message: "A chat with this user already exists"});

//         const chat = await Chat.create({type: "dual"} ,{ transaction: transaction });

//         await ChatUser.bulkCreate([
//             {
//               chatId: chat.id,
//               userId: req.user.id
//             },
//             {
//               chatId: chat.id,
//               userId: partnerId
//             },
//           ], {transaction: t});

//           await transaction.commit();
//           const NewChat = await Chat.findOne({
//         // Ymkn fi mshkle hon

//             where: {
//                 id: chat.id
//             },
//             include: [
//                 {
//                     model: User,
//                     where: {
//                         [Op.not]: {
//                             id: req.user.id
//                         }
//                     }
//                 },
//                 {
//                     model: Message
//                 },
//             ]
//           })
          
//           return res.send(NewChat);


//     } catch (error) {

//         await transaction.rollback();
//         return res.status(500).json({status: "Error", message: error.message});
        
//     }


// }

