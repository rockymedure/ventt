'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

type Post = {
  id: string;
  content: string;
  category: string;
  timestamp: Date;
  reactions: number;
};

const CATEGORIES = [
  { id: 'frustration', label: 'Frustration', color: 'bg-red-100 text-red-800' },
  { id: 'anxiety', label: 'Anxiety', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'hope', label: 'Hope', color: 'bg-green-100 text-green-800' },
  { id: 'advice', label: 'Seeking Advice', color: 'bg-blue-100 text-blue-800' },
  { id: 'success', label: 'Small Win', color: 'bg-emerald-100 text-emerald-800' },
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      content: "Applied to 20 companies this week. Only got 2 automated rejections. The silence is the worst part.",
      category: 'frustration',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      reactions: 12,
    },
    {
      id: '2',
      content: "Finally heard back from a company after 3 weeks! It's just a phone screening, but I'll take it.",
      category: 'hope',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      reactions: 28,
    },
    {
      id: '3',
      content: "Anyone else feel like their skills are becoming irrelevant? I keep seeing job posts asking for experience I don't have.",
      category: 'anxiety',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      reactions: 15,
    },
  ]);

  const [newPost, setNewPost] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('frustration');
  const [showPostForm, setShowPostForm] = useState(false);

  const handleSubmitPost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Math.random().toString(36).substr(2, 9),
        content: newPost.trim(),
        category: selectedCategory,
        timestamp: new Date(),
        reactions: 0,
      };
      setPosts([post, ...posts]);
      setNewPost('');
      setShowPostForm(false);
    }
  };

  const handleLikePost = (postId: string) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, reactions: post.reactions + 1 }
          : post
      )
    );
  };

  const playChord = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // C major chord frequencies (C4, E4, G4)
      const frequencies = [261.63, 329.63, 392.00];
      const duration = 0.3; // 300ms
      
      frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
        oscillator.type = 'sine';
        
        // Gentle volume with slight delay for each note
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01 + index * 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      });
    } catch (error) {
      // Silently fail if Web Audio API is not supported
      console.log('Audio not supported');
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours === 1) return '1 hour ago';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  const getCategoryStyle = (categoryId: string) => {
    return CATEGORIES.find(cat => cat.id === categoryId)?.color || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-slate-900">Ventt</h1>
          <p className="text-sm text-slate-600 mt-1">You're not alone in this journey</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Welcome Message */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="pt-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Welcome to Ventt
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              This is a safe space to share your job search frustrations, celebrate small wins, 
              and connect with others who understand what you're going through. You're not alone.
            </p>
          </CardContent>
        </Card>

        {/* Quick Post Button */}
        {!showPostForm && (
          <Card className="hover:shadow-md transition-shadow cursor-pointer" 
                onClick={() => setShowPostForm(true)}>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback className="bg-slate-200">?</AvatarFallback>
                </Avatar>
                <div className="flex-1 py-3 px-4 bg-slate-50 rounded-full">
                  <span className="text-slate-500">What's on your mind today?</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Post Form */}
        {showPostForm && (
          <Card className="border-blue-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Share what you're feeling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Type your thoughts here... Remember, this is a supportive space."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-[100px] resize-none"
              />
              
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">How are you feeling?</p>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((category) => (
                    <Badge
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedCategory === category.id ? category.color : ''
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button 
                  onClick={handleSubmitPost}
                  disabled={!newPost.trim()}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Share
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowPostForm(false);
                    setNewPost('');
                  }}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Posts Feed */}
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900">Recent posts from the community</h3>
          
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-slate-200">A</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-slate-500">Anonymous</span>
                      <Badge className={getCategoryStyle(post.category)}>
                        {CATEGORIES.find(cat => cat.id === post.category)?.label}
                      </Badge>
                      <span className="text-xs text-slate-400">
                        {formatTimeAgo(post.timestamp)}
                      </span>
                    </div>
                    <p className="text-slate-800 leading-relaxed mb-3">
                      {post.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-slate-500 hover:text-red-600 transition-colors"
                        onClick={() => handleLikePost(post.id)}
                        onMouseEnter={playChord}
                      >
                        <span className="text-red-500">❤️</span> {post.reactions}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-slate-500 hover:text-blue-600"
                      >
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Resources */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-slate-900 mb-2">Need additional support?</h3>
            <p className="text-slate-700 text-sm mb-3">
              Remember, it's okay to seek professional help. Here are some resources:
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Crisis Text Line:</strong> Text HOME to 741741
              </div>
              <div>
                <strong>National Suicide Prevention Lifeline:</strong> 988
              </div>
              <div>
                <strong>Psychology Today:</strong> Find therapists in your area
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
